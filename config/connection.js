const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  database: "burgers_db",
  user: "root",
  password: ""
});

connection.connect(err => {
  if (err) throw err;
  console.log("Database connected at id " + connection.threadId);
})

module.exports = connection;