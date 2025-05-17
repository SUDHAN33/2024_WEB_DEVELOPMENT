const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'File_Search',
  password: 'Password@123',
  port: 5432,
});

module.exports = pool;