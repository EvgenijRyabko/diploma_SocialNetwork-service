const fs = require('fs');
const { main } = require('../database/connection');

const getUsers = async (req, res) => {
  try {
    const result = await main('users');

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Парамаетр id не найден!';

    const result = await main('users').where('id', id);

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
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
  await fs.promises.writeFile(path, Buffer.from(buffer), 'UTF-8');
  // создать запись в бд
  await main('users').where('id', idUser).update('profile-img', path);
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
    res.status(500).json({ message: error.message });
  }
};

const uploadProfileImageByUser = async (req, res) => {
  const { id: idUser } = req.params;
  try {
    if (!idUser) throw 'Параметр idTerminal не найден';

    const path = `uploadFiles/${idUser}/profile/`;

    const checkPath = await checkDirectory(path);

    if (!checkPath) await fs.promises.mkdir(path, { recursive: true });

    //  const arrayFiles = req.file;

    console.log(req.files);

    //  if (Array.isArray(arrayFiles)) {
    //    for (const iterator of arrayFiles) {
    //      await writeProfileImage(path + iterator.name, idUser, iterator.data.data);
    //    }
    //  } else await writeProfileImage(path + arrayFiles.name, idUser, arrayFiles.data.data);

    res.status(200).json([]);
  } catch (e) {
    console.log(e);
    const error = new Error(e);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getByID,
  uploadImagesByUser,
  uploadProfileImageByUser,
};
