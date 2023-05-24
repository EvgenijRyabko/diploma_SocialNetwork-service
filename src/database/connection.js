/* eslint-disable import/order */
const configMain = require('../../knexfile').main;
const main = require('knex')(configMain);

const configSocial = require('../../knexfile').social;
const social = require('knex')(configSocial);

const destroyAll = async function () {
  await social.destroy();
  await main.destroy();
};

module.exports = {
  main,
  social,
  destroyAll,
};
