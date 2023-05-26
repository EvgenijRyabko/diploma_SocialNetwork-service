/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('followers').del();
  await knex('followers').insert([
    { id: 1, source_id: 1, target_id: 2 },
    { id: 2, source_id: 1, target_id: 3 },
    { id: 3, source_id: 4, target_id: 1 },
    { id: 4, source_id: 4, target_id: 2 },
    { id: 5, source_id: 5, target_id: 1 },
    { id: 6, source_id: 3, target_id: 5 },
  ]);
};
