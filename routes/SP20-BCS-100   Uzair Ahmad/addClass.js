const { json } = require('express');
var express = require('express');
const student = require('../models/student');
const teacher = require('../models/teacher');
var router = express.Router();


router.post('/addclass', function(req, res, next) {
    Class.create(req.body,function(err,data){
        if(err) throw err
        res.json(data);
    });
    //res.send("adding class");
  });

  
module.exports = router;