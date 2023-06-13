/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('albums').del();
  await knex('albums').insert([
    { name: 'Основной', user_id: 1 },
    { name: 'Основной', user_id: 2 },
    { name: 'Основной', user_id: 3 },
    { name: 'Основной', user_id: 4 },
    { name: 'Основной', user_id: 5 },
  ]);
};
