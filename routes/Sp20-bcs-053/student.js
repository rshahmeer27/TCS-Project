var express = require('express');
var router = express.Router();
var Quiz = require('../../models/quiz');

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.get('/viewQuiz/:qid', function (req, res, next) {
	Quiz.find({ _id: req.params.qid }).exec(function (error, results) {
		if (error) {
			return next(error);
		}
		res.json({ results });
	});
});

module.exports = router;
