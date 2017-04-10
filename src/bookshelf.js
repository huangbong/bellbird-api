require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: 'knex,public',
  debug: process.env.NODE_ENV === 'development'
});

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

export default bookshelf;
