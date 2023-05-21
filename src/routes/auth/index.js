const { Auth } = require('../../controllers/auth');

module.exports = (app, url) => {
  // Зарегестрироваться на сайте
  app.post(`${url}/signup`);
  // Войти на сайт
  app.post(`${url}/signin`, Auth);
  // Выйти с сайта
  app.post(`${url}/signout`);
};
