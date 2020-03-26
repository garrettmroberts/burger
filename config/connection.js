const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "burgers_db",
  user: "root",
  password: "BlueBird36!"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Database connected at id " + connection.threadId);
})

module.exports = connection;