const connection = require("./connection");

const orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", (err, res) => {
      if (err) throw err;
      return res;
    });
  },

  insertOne: function(burger_name, devoured) {
    const sql = connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)", [burger_name, devoured], (err, res) => {
      if (err) throw err;
      console.log(sql._results[0].affectedRows + " burger added.")
    });
  },

  updateOne: function(id) {
    const sql = connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [id], (err, res) => {
      if (err) throw err;
      console.log(sql._results[0].affectedRows + " burgers edited.")
    });
  }
};

module.exports = orm;

orm.selectAll();