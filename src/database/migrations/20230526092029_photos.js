/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('photos', (table) => {
    table.increments('id').comment('ID изображения');
    table.string('path').notNullable().comment('Путь к фото');
    table.integer('album_id').notNullable().comment('ID альбома');
    table.integer('type').notNullable().comment('Тип фотографии');
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('album_id').references('albums.id').onUpdate('Cascade').onDelete('Cascade');
    table.foreign('type').references('photo_types.id').onUpdate('Cascade').onDelete('Cascade');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('photos');
};
