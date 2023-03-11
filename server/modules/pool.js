// Already installed pg in server.js terminal steps
// npm install pg
const pg = require("pg");

const pool = {
  pool = new pg.Pool({
    host: "localhost",
    port: 5432,
    database: "<RENAME>",
  });
}

module.exports = pool;
