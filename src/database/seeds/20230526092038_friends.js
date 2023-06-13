/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('friends').del();
  await knex('friends').insert([
    { user1: 2, user2: 3 },
    { user1: 1, user2: 4 },
    { user1: 1, user2: 5 },
  ]);
};
