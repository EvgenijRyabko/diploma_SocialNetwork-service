/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('albums').del();
  await knex('albums').insert([
    { id: 1, name: 'Основной', user_id: 1 },
    { id: 2, name: 'Основной', user_id: 2 },
    { id: 3, name: 'Основной', user_id: 3 },
    { id: 4, name: 'Основной', user_id: 4 },
    { id: 5, name: 'Основной', user_id: 5 },
  ]);
};
