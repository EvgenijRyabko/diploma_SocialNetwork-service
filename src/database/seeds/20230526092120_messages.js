/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('messages').del();
  await knex('messages').insert([
    { source_id: 1, target_id: 2, text: 'Hello!' },
    { source_id: 1, target_id: 3, text: 'How are you?' },
    { source_id: 4, target_id: 1, text: 'Fine' },
    { source_id: 4, target_id: 2, text: 'Thank you' },
    { source_id: 5, target_id: 1, text: 'Message' },
    { source_id: 3, target_id: 5, text: 'Another message' },
  ]);
};
