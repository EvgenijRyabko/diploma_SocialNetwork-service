/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.withSchema('public').createTable('users', (table) => {
    table.increments('id').comment('ID пользователя');
    table.string('login').notNullable().comment('Логин пользователя');
    table.string('password').notNullable().comment('Пароль пользователя');
    table.string('profile_img').comment('Изображение профиля');
    table.string('name').notNullable().comment('Наименование пользователя');
    table.string('city').comment('Город проживания');
    table.string('education').comment('Образование');
    table.string('status').checkLength('<=', 50).comment('Статус пользователя');
    table.date('birth_date').comment('Дата рождения');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.withSchema('public').dropTableIfExists('users');
};
