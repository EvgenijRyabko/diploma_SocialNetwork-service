/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('photo_types').del();
  await knex('photo_types').insert([{ type: 'default' }, { type: 'profile' }]);
};
