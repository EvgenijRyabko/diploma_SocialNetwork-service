const moment = require('moment');
const JWT = require('../crypto/JWT');
const { errorHandler } = require('../utils/errorHandler');

const jwt = new JWT();

const CheckToken = async function (req, res, next) {
  try {
    console.log(req);
    if (req?.headers['auth-token']) {
      const token = req?.headers['auth-token'];

      if (jwt.CheckJWT(token)) next();
      else throw errorHandler('token is not valid', 419);
    } else throw errorHandler('token not found', 401);
  } catch (e) {
    const error = !e.code ? errorHandler(e, 401) : e;
    res.status(error.code).json(error.message);
  }
};

module.exports = CheckToken;
