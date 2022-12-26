var express = require('express');
var router = express.Router();
var Classes = require('../../models/class')

router.get('/classes',function(req,res,next){
    Class.find({}).populate('teacher','name').populate('students.sid').exec(function(error,results){
        if(error){
            return  next(error);
            }
        res.json(results);
        });
    });

        module.exports = router;