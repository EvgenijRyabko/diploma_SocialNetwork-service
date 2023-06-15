const jwt = require('jsonwebtoken');
const { main } = require('../database/connection');
const { errorHandler } = require('../utils/errorHandler');
const AES = require('../crypto/AES');
const JWT = require('../crypto/JWT');
require('dotenv').config();

const Auth = async (req, res) => {
  const cryptoKey = process.env.CRYPTO_KEY;
  let userData = {};

  // We find the user in the database and write down his information
  // eslint-disable-next-line no-shadow
  const CheckLogin = async (req, res) => {
    try {
      if (req.body.login && req.body.password) {
        const login = req.body.login.trim();

        const user = await main('users').where('login', login).first();

        if (user) {
          userData = { ...user };
          CheckPass(req, res, user.password);
        } else throw 'Пользователь не найден';
      } else throw 'Пустые поля формы';
    } catch (e) {
      const error = errorHandler(e, 401);
      res.status(error.code).send({ error: error.message });
    }
  };

  // Compare passwords
  // eslint-disable-next-line no-shadow
  const CheckPass = async (req, res, password) => {
    try {
      const storedPassword = new AES().Decrypt(password, cryptoKey);
      const requestPassword = new AES().Decrypt(req.body.password.trim(), cryptoKey);

      // console.log(requestPassword);
      if (requestPassword === storedPassword) await successAuth(req, res);
      else throw 'Неправильный логин или пароль';
    } catch (e) {
      const error = errorHandler(e, 401);
      res.status(error.code).send({ error: error.message });
    }
  };

  // Успешная авторизация с возвращением данных клиенту
  // eslint-disable-next-line no-shadow
  const successAuth = async (req, res) => {
    try {
      const token = (userData.auth_token = jwt.sign(
        {
          login: userData.login,
          id_user: parseInt(userData.id),
        },
        process.env.JWT_KEY,
        { expiresIn: 60 },
      ));

      const payload = {
        id_user: parseInt(userData.id),
        token,
      };

      res.status(200).send(payload);
    } catch (e) {
      const error = errorHandler(e);
      res.status(error.code).send({ error: error.message });
    }
  };

  await CheckLogin(req, res);
};

const Register = async (req, res) => {
  const { username, login, password } = req.body;

  try {
    if (!username || !login || !password) throw 'Поля не заполнены!';

    const user = await main('users').where('login', login).first();
    if (user) throw 'Логин занят!';

    await main('users').insert({
      login,
      password,
      name: username,
    });

    res.status(200).end();
  } catch (e) {
    const error = errorHandler(e);
    res.status(error.code).send({ error: error.message });
  }
};

module.exports = {
  Auth,
  Register,
};
