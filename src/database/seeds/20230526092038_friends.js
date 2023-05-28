/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('friends').del();
  await knex('friends').insert([
    { id: 3, user1: 2, user2: 3 },
    { id: 4, user1: 1, user2: 4 },
    { id: 5, user1: 1, user2: 5 },
  ]);
};
