const moment = require('moment');
const jwt = require('jsonwebtoken');
const { errorHandler } = require('../utils/errorHandler');

const CheckToken = async function (req, res, next) {
  try {
    if (req?.headers['auth-token']) {
      const token = req?.headers['auth-token'];
      //   console.log(token);

      // Decoding token to get data
      jwt.verify(token, process.env.JWT_KEY, (err) => {
        if (err) throw errorHandler('token is not valid', 419);

        next();
      });
    } else throw errorHandler('token not found', 401);
  } catch (e) {
    const error = !e.code ? errorHandler(e, 401) : e;
    res.status(error.code).json(error.message);
  }
};

module.exports = CheckToken;
