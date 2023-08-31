const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "employee_tracker",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the employee_tracker database.");
});

module.exports = db;
