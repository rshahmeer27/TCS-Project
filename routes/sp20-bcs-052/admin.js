var express = require('express');
const Student = require('../models/student');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});
router.delete('/delstudent/:id', function (req, res, next) {
	Student.deleteOne({ _id: req.params.id }, function (error, results) {
		if (error) {
			return next(error);
		}
		// Respond with valid data
		res.json(results);
	});
});
  
  module.exports = router;