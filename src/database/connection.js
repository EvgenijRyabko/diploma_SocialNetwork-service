const knex = require('knex');
const config = require('../../knexfile').social;

module.exports = {
  knexConnection: knex(config),
};
