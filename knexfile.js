require('dotenv').config();

const main = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    timezone: 'Europe/Moscow',
  },
  pool: { min: 0, max: 50 },
  acquireConnectionTimeout: 10000,
  migrations: {
    directory: `${__dirname}/src/database/migrations/main`,
    tableName: 'migrations',
  },
};

const social = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8',
    timezone: 'Europe/Moscow',
  },
  searchPath: ['social'],
  pool: { min: 0, max: 50 },
  acquireConnectionTimeout: 10000,
  migrations: {
    directory: `${__dirname}/src/database/migrations/social`,
    tableName: 'migrations',
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds/social`,
  },
};

module.exports = {
  main,
  social,
};
