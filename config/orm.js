const connection = require("./connection");

const orm = {
  selectAll: function(table) {
    connection.query("SELECT * FROM ??", [table], (err, res) => {
      if (err) throw err;
      return res;
    });
  },

  insertOne: function(table, burger_name, devoured) {
    const sql = connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)", [table, burger_name, devoured], (err, res) => {
      if (err) throw err;
      console.log(sql._results[0].affectedRows + " burger added.")
    });
  },

  updateOne: function(table, id) {
    const sql = connection.query("UPDATE ?? SET devoured = true WHERE id = ?", [table, id], (err, res) => {
      if (err) throw err;
      console.log(sql._results[0].affectedRows + " burgers edited.")
    });
  }
};

module.exports = orm;