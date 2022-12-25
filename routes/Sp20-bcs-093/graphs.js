var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('respond with a resourcejjjj');
});

router.get('/graphs', function(req, res, next) {
    Result.find({}).populate('class.cid').sort('gpa').exec(function(err,data){
        if(err) throw err

        res.status(200).json(data)
    });
  });


module.exports =router;