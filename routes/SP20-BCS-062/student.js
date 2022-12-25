var express = require('express');
var router = express.Router();
var Student = require('../../models/Student')

app.get('/viewMarks/:sid', (req, res) => {
    Student.find({_id : req.params.sid}).exec(function(err,result){
        if(err) throw err;
        else{
            res.json(result)
        }
    })
    
  });


  module.exports = router;