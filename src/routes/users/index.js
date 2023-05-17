const { getUsers, getByID } = require('../../controllers/users');

module.exports = (app, url, ...args) => {
  // Получить пользователей
  app.get(`${url}/getAll`, [...args], getUsers);

  // Получить пользователя по id
  app.get(`${url}/:id`, [...args], getByID);
};
