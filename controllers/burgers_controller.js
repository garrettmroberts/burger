const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burgers: data})
  });
});

router.post("/", function(req, res) {
  burger.insertBurger(params.body.burger_name, false);
  burger.selectAll(function (data) {
    res.render("index", { burgers: data })
  });
});

router.delete("/:id", function(req, res) {
  burger.updateBurger(id);
})

module.exports = router;