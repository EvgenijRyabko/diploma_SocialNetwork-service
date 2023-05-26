/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('friends', (table) => {
    table.increments('id').comment('ID отношений');
    table.integer('user1').notNullable().comment('Первый пользователь');
    table.integer('user2').notNullable().comment('Второй пользователь');

    table.foreign('user1').references('users.id').onUpdate('Cascade').onDelete('Cascade');
    table.foreign('user2').references('users.id').onUpdate('Cascade').onDelete('Cascade');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('friends');
};
