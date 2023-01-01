var express = require('express');
var router = express.Router();

router.get('/classes', function (req, res, next) {
	Class.find({})
		.populate('teacher')
		.populate('students.sid')
		.exec(function (error, results) {
			if (error) {
				return next(error);
			}
			// Respond with valid data
			res.json(results);
		});
});

module.exports = router;
