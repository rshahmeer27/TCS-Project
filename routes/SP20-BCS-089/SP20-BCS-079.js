var express = require('express');
var router = express.Router();
var Student = require('../../models/student');

router.delete('/delstudent-marks/:sid/:course', function (req, res, next) {
	Student.updateOne(
		{ _id: req.params.id },
		{
			$pull: {
				courses: [{ code: req.params.course }],
			},
		}
	),
		(err, result) => {
			if (err) {
				return next(err);
			}
			// Respond with valid data
			res.json({ message: 'seccessfully deleted student' });
		};
});

module.exports = router;
