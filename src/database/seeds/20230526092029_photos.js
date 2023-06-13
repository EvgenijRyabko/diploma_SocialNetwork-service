/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('photos').del();
  await knex('photos').insert([
    { path: '1/profile/1.jpg', album_id: 1, type: 2 },
    { path: '1/2.jpg', album_id: 1, type: 1 },
    { path: '1/3.jpg', album_id: 1, type: 1 },
    { path: '1/4.jpg', album_id: 1, type: 1 },
    { path: '1/5.jpg', album_id: 1, type: 1 },
    { path: '1/6.jpg', album_id: 1, type: 1 },
    { path: '1/7.jpg', album_id: 1, type: 1 },
    { path: '1/8.jpg', album_id: 1, type: 1 },
    { path: '1/9.jpg', album_id: 1, type: 1 },
    { path: '1/10.jpg', album_id: 1, type: 1 },
    { path: '2/1.jpg', album_id: 2, type: 1 },
    { path: '2/2.jpg', album_id: 2, type: 1 },
    { path: '2/3.jpg', album_id: 2, type: 1 },
    { path: '3/1.jpg', album_id: 3, type: 1 },
    { path: '3/2.jpg', album_id: 3, type: 1 },
    { path: '3/3.jpg', album_id: 3, type: 1 },
    { path: '3/4.jpg', album_id: 3, type: 1 },
  ]);
};
