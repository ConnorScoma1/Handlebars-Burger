// Router Controller
// All Router Connections & Endpoints
var express = require("expreess");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    // Handlesbars Object Holding Data
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne(
      ["burger_name", "eat"],
      [req.body.burger_name, req.body.eat],
      function(result) {
        res.json({ id: result.inserId });
      }
    );
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id =" + req.params.id;

    cosnole.log("condition ", condition);
    burger.updateOne({ eat: req.body.eat }, condition, function(result) {
      if ((result, changedRows === 0)) {
        return res.status(404).end();
      } else {
        return status(200).end();
      }
    });
  });

  router.deleteOne(condition, function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
      if ((result, changedRows === 0)) {
        return res.status(404).end();
      } else {
        return status(200).end();
      }
    });
  });
});

module.exports = router;
