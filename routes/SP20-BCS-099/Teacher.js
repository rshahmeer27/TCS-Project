var express = require('express');
var router = express.Router();

/* GET Operations */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

//Add Teacher
router.post('/addteacher', function(req, res, next) {
    Teacher.create(req.body)
        .then((teacher) => {
            console.log('Teacher has been Added ', teacher);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(teacher);
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = router;