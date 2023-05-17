const { knexConnection } = require('../database/connection');

const getPosts = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Параметр id не найден!';

    const result = await knexConnection('posts').where('author', id);

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

    await knexConnection('posts').insert({
      header,
      text,
      author: id,
    });

    res.status(200).json([]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) throw 'Параметр id не найден!';

    await knexConnection('posts').where('id', id).del();

    res.status(200).json([]);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
