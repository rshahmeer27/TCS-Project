var express = require('express');
var router = express.Router();
var Student = require('../../models/student');

router.get('/grades/:studentId', function (req, res, next) {
	Student.find({ _id: req.params.studentId }).exec(function (error, results) {
		if (error) {
			return next(error);
		}
		res.json(results.grades);
	});
});

module.exports = router;