/* eslint-disable import/order */
const configMain = require('../../knexfile').mainConnection;
const main = require('knex')(configMain);

const destroyAll = async function () {
  await main.destroy();
};

module.exports = {
  main,
  destroyAll,
};
