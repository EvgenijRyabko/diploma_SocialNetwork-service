const fs = require('fs');
const { knexConnection } = require('../database/connection');

const getUsers = async (req, res) => {
  try {
    const result = await knexConnection('users');

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getByID = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw 'Парамаетр id не найден!';

    const result = await knexConnection('users').where('id', id);

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getUsers,
  getByID,
};
