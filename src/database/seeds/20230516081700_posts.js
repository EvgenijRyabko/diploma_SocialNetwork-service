/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del();
  await knex('posts').insert([
    { id: 1, header: 'Пост 1', text: 'Рандомный текст 1', author: 1 },
    { id: 2, header: 'Пост 2', text: 'Рандомный текст 2', author: 1 },
    { id: 3, header: 'Пост 3', text: 'Рандомный текст 3', author: 1 },
    {
      id: 4,
      header: 'Ахахахах, Джими мальчик мой, иди нахер',
      text: 'feat.Dr.Livesey',
      author: 2,
    },
    { id: 5, header: 'Уже не просто пост', text: 'Уже не просто текст', author: 2 },
    { id: 6, text: 'Пост без заголовка', author: 2 },
    { id: 7, header: 'Опана', text: 'И тут тоже опана', author: 3 },
    { id: 8, header: 'Второй', text: 'Да-да, второй', author: 3 },
    { id: 9, header: 'Третий', text: 'э', author: 3 },
  ]);
};
