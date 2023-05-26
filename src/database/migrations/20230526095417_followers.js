/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('followers', (table) => {
    table.increments('id').comment('ID отношений');
    table.integer('source_id').notNullable().comment('Подписчик');
    table.integer('target_id').notNullable().comment('На кого подписался');

    table.foreign('source_id').references('users.id').onUpdate('Cascade').onDelete('Cascade');
    table.foreign('target_id').references('users.id').onUpdate('Cascade').onDelete('Cascade');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('followers');
};
