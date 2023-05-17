const { getPosts, createPost, deletePost } = require('../../controllers/posts');

module.exports = (app, url, ...args) => {
  // Получить все посты пользователя
  app.get(`${url}/:id`, [...args], getPosts);

  // Создать пост у пользователя
  app.post(`${url}/:id`, [...args], createPost);

  // Удалить пост
  app.delete(`${url}/:id`, [...args], deletePost);
};
