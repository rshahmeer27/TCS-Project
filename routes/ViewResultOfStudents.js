var express = require('express');
const { json } = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Dashboard of head");
});

router.get('/result/class/:id', function(req, res, next) {
  Result.find({}).populate('class.cid').sort('name').exec(function(err,data){
      if(err) throw err
      res.json(data );
  });
  // View Result of class
});

module.exports = router;