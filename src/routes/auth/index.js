module.exports = (app, url, ...args) => {
  // Зарегестрироваться на сайте
  app.post(`${url}/register`, ...args);
  // Войти на сайт
  app.post(`${url}/login`, ...args);
};
