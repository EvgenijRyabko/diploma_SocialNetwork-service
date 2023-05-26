/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('photo_types').del();
  await knex('photo_types').insert([
    { id: 1, colName: 'default' },
    { id: 2, colName: 'profile' },
  ]);
};
