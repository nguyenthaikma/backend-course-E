const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "hoidanit",
  password: "123456",
});

module.exports = pool.promise();
