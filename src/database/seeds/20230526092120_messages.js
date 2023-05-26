/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('messages').del();
  await knex('messages').insert([
    { id: 1, source_id: 1, target_id: 2, text: 'Hello!' },
    { id: 2, source_id: 1, target_id: 3, text: 'How are you?' },
    { id: 3, source_id: 4, target_id: 1, text: 'Fine' },
    { id: 4, source_id: 4, target_id: 2, text: 'Thank you' },
    { id: 5, source_id: 5, target_id: 1, text: 'Message' },
    { id: 6, source_id: 3, target_id: 5, text: 'Another message' },
  ]);
};
