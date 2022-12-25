var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// Attempt Quiz
router.post('/attempt-quiz', function (req, res) {
	let numCorrect = 0;
	for (let i = 0; i < req.body.length; i++) {
		if (req.body[i].submittedAnswer === req.body[i].correctAnswer) {
			numCorrect++;
		}
	}
	res.send({
		numCorrect: numCorrect,
		numQuestions: req.body.length,
	});
});

module.exports = router;
