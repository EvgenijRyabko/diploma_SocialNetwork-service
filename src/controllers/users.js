const fs = require('fs');
const { main } = require('../database/connection');

const getUsers = async (req, res) => {
  try {
    const result = await main('users');

    res.status(200).send(result);
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Парамаетр id не найден!';

    const result = await main('users').where('id', id);

    res.status(200).send(result);
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const checkDirectory = async (path) => {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const writeProfileImage = async (path, idUser, buffer) => {
  // создать файл
  await fs.promises.writeFile(`src/uploads/${path}`, buffer);
  // создать запись в бд
  await main('users').where('id', idUser).update('profile_img', path);
};

const writeImages = async (path, idUser, buffer) => {
  // создать файл
  await fs.promises.writeFile(path, Buffer.from(buffer), 'UTF-8');
  // создать запись в бд
  await main('users').where('id', idUser).update('images', path);
};

const uploadImagesByUser = async (req, res) => {
  const { id: idUser } = req.params;
  try {
    if (!idUser) throw 'Параметр idTerminal не найден';

    const path = `uploadFiles/${idUser}/`;

    const checkPath = await checkDirectory(path);

    if (!checkPath) await fs.promises.mkdir(path, { recursive: true });

    const arrayFiles = req.body.files.file;

    if (Array.isArray(arrayFiles)) {
      for (const iterator of arrayFiles) {
        await writeImages(path + iterator.name, idUser, iterator.data.data);
      }
    } else await writeImages(path + arrayFiles.name, idUser, arrayFiles.data.data);

    res.status(200).json([]);
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const uploadProfileImageByUser = async (req, res) => {
  const { id: idUser } = req.params;
  try {
    if (!idUser) throw 'Параметр idUser не найден';

    const path = `${idUser}/profile/`;

    const checkPath = await checkDirectory(path);

    if (!checkPath) await fs.promises.mkdir(path, { recursive: true });

    const { file } = req.body;
    console.log(file);
    // file = file.replace(/^data:image\/\w+;base64,/, '');
    // file = file.replace(/ /g, '+');

    const buffer = Buffer.from(file, 'base64');
    console.log(buffer);

    await writeProfileImage(`${path}avatar.jpg`, idUser, buffer);

    res.status(200).send(`${path}avatar.jpg`);
  } catch (e) {
    console.log(e);
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

const getFollowersList = async (req, res) => {
  const { id: idUser } = req.params;
  try {
    if (!idUser) throw 'Параметр idUser не найден';

    const followersArray = await main('followers').select('target_id').where('source_id', idUser);
    const friendsArray = await main('friends').where('user1', idUser).orWhere('user2', idUser);

    res.status(200).send({
      followers: followersArray.map((el) => el.target_id),
      friends: friendsArray.map((el) => (el.user1 === idUser ? el.user1 : el.user2)),
    });
  } catch (e) {
    const error = new Error(e);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getByID,
  uploadImagesByUser,
  uploadProfileImageByUser,
  getFollowersList,
};
