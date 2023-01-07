var express = require('express');
var router = express.Router();
const result = require("../models/SP20-BCS-088 Saif Ur Rahman/result");

// View Result of class ---SP20-BCS-088/Saif Ur Rahman
router.get('/result/class/:id', function(req, res, next) {
    result.find({}).populate('class.cid').sort('name').exec(function(err,data){
        if(err) throw err
        res.send(data );
    });
});
module.exports = router;
