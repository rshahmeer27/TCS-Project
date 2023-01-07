const {json} = require('express');
var express = require('express');
const teacher = require('../models/teacher');
const student = require('../models/student');
var router = express.Router();

router.post('/addclass', function(req, res, next){
    Class.create(req.body,function(err,data){
        if(err) 
          throw err
        res.json(data);
    });
  });
module.exports = router;
