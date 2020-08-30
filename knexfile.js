// Update with your config settings.

const { postgres_db } = require('./.env')

module.exports = {
  client: 'postgresql',
  connection: postgres_db,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
