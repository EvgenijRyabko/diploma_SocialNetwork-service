/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('social').createTable('posts', (table) => {
    table.increments('id').primary().comment('Идентификатор публикации');
    table.string('header').comment('Заголовок публикации');
    table.string('text', 1000).notNullable().comment('Содержание публикации');
    table.integer('author').notNullable().comment('Автор публикации');
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('author').references('users.id').onUpdate('Cascade').onDelete('Cascade');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('social').dropTableIfExists('posts');
};
