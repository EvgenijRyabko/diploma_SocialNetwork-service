/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('photo_types', (table) => {
    table.increments('id').comment('ID изображения');
    table.string('type').notNullable().comment('Тип фото');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('photo_types');
};
