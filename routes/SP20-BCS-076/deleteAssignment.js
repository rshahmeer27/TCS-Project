var express = require("express");
const assignment = require("../../models/assignment");
var router = express.Router();

router.delete("/delassignment/:id", function (req, res, next) {
  assignment.findByIdAndDelete({ _id: req.params.id }, function (err, results) {
    if (err) throw err;
    res.json(results);
  });
});
module.exports = router;
