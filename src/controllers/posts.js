const { main } = require('../database/connection');

const getPosts = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Параметр id не найден!';

    const result = await main('posts').where('author', id);

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createPost = async (req, res) => {
  const { id } = req.params;
  const { header = '', text } = req.body;

  try {
    if (!id) throw 'Параметр id не найден!';
    if (!text) throw 'Текст не указан!';

    await main('posts').insert({
      header,
      text,
      author: id,
    });

    res.status(200).json([]);
  } catch (err) {
    const error = new Error(err);
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw 'Параметр id не найден!';

    await main('posts').where('id', id).del();

    res.status(200).json([]);
  } catch (err) {
    res.status(500).send(new Error(err).message);
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
