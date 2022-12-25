var express = require('express');
var router = express.Router();

// View Result of class ---SP20-BCS-088/Saif Ur Rahman
router.get('/result/class/:id', function(req, res, next) {
    Result.find({}).populate('class.cid').sort('name').exec(function(err,data){
        if(err) throw err
        res.json(data );
    });
});
module.exports = router;
