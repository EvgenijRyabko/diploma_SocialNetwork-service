/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('messages', (table) => {
    table.increments('id').comment('ID отношений');
    table.integer('source_id').notNullable().comment('Отправитель');
    table.integer('target_id').notNullable().comment('Получатель');
    table.string('text').notNullable().comment('Текст сообщения');
    table.timestamp('created_at').defaultTo(knex.fn.now()).comment('Время отправки');

    table.foreign('source_id').references('users.id').onUpdate('Cascade').onDelete('Cascade');
    table.foreign('target_id').references('users.id').onUpdate('Cascade').onDelete('Cascade');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('messages');
};
