/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    { header: 'Пост 1', text: 'Рандомный текст 1', author: 1 },
    { header: 'Пост 2', text: 'Рандомный текст 2', author: 1 },
    { header: 'Пост 3', text: 'Рандомный текст 3', author: 1 },
    {
      header: 'Ахахахах, Джими мальчик мой, иди нахер',
      text: 'feat.Dr.Livesey',
      author: 2,
    },
    { header: 'Уже не просто пост', text: 'Уже не просто текст', author: 2 },
    { text: 'Пост без заголовка', author: 2 },
    { header: 'Опана', text: 'И тут тоже опана', author: 3 },
    { header: 'Второй', text: 'Да-да, второй', author: 3 },
    { header: 'Третий', text: 'э', author: 3 },
  ]);
};
