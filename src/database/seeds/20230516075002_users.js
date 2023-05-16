const { AES } = require('../../crypto/crypto');
require('dotenv').config();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      login: 'DjonniKiller',
      password: AES.encode('hello', process.env.CRYPTO),
      name: 'Евгений Рябко',
    },
    {
      id: 2,
      login: 'WerWoulf',
      password: AES.encode('1978', process.env.CRYPTO),
      name: 'Роман Рябко',
    },
    {
      id: 3,
      login: 'astrelkov',
      password: AES.encode('strel', process.env.CRYPTO),
      name: 'Стрельцов Андрей',
    },
    {
      id: 4,
      login: 'deer',
      password: AES.encode('deer', process.env.CRYPTO),
      name: 'Олень',
    },
    {
      id: 5,
      login: 'javascript',
      password: AES.encode('javascript', process.env.CRYPTO),
      name: 'Джава Скрыпт',
    },
  ]);
};
