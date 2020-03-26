const orm = require("../config/orm");

const burger = {
  selectAll: function() {
    orm.selectAll("burgers")
  },

  insertBurger: function(burger_name, devoured) {
    orm.insertOne("burgers", burger_name, devoured);
  },

  updateBurger: function(id) {
    orm.updateOne("burgers", id);
  }
}

module.exports = burger;