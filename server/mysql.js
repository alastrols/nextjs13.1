const mysql = require("mysql2");
const { resolve } = require("path");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "zeniya-website",
  dateStrings: "date",
});

const connection = pool.promise();

connection
  .query("SELECT 1")
  .then(([rows, fields]) => {
    console.log("MySQL is running...");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { connection };
