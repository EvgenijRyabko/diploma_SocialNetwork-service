const multer = require('multer');

const upload = multer({ dest: './src/uploads/' });

const {
  getUsers,
  getByID,
  uploadProfileImageByUser,
  uploadImagesByUser,
} = require('../../controllers/users');

module.exports = (app, url, ...args) => {
  // Получить пользователей
  app.get(`${url}/getAll`, [...args], getUsers);

  // Закинуть изображение профиля
  app.post(`${url}/uploadProfile/:id`, upload.array('photo'), uploadProfileImageByUser);

  // Закинуть изображения на страницу
  app.post(`${url}/upload/:id`, [...args], uploadImagesByUser);

  // Получить пользователя по id
  app.get(`${url}/:id`, [...args], getByID);
};
