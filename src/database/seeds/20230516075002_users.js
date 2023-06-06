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
      login: 'DjonniKiller',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Евгений Рябко',
      education: 'Колледж ЛНУ им. В.Даля',
      city: 'Луганск',
      status: 'На чиле, на раслабоне',
      birth_date: '2003-11-24',
    },
    {
      login: 'WerWoulf',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Роман Рябко',
    },
    {
      login: 'astrelkov',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Стрельцов Андрей',
    },
    {
      login: 'deer',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Олень',
    },
    {
      login: 'javascript',
      password: '0c3c000000000000000d00000000003c:3763013532a0af1a28be6b28c86460f9',
      name: 'Джава Скрыпт',
    },
  ]);
};
