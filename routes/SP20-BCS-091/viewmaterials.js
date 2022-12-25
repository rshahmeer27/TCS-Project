var express = require('express');
var router = express.Router();
var Materials = require('../../models/material')

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.get('/viewmaterials', function(req, res, next) {
    Materials.find({}).populate('teacher.id').sort('UploadedOn').exec(function(err,data){
        if(err) throw err

        res.status(200).json(data)
    });
  });
module.exports = router;