const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", {burgers: data});
  });
});

router.post("/", function(req, res) {
  burger.insertBurger(req.body.burger_name, false);
  burger.selectAll(function (data) {
    res.render("index", { burgers: data });
  });
});

router.put("/:id", function(req, res) {
  var id = req.params.id
  burger.updateBurger(id);
  res.status(200).end();
})

module.exports = router;