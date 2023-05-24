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
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Евгений Рябко',
    },
    {
      id: 2,
      login: 'WerWoulf',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Роман Рябко',
    },
    {
      id: 3,
      login: 'astrelkov',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Стрельцов Андрей',
    },
    {
      id: 4,
      login: 'deer',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Олень',
    },
    {
      id: 5,
      login: 'javascript',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Джава Скрыпт',
    },
  ]);
};
