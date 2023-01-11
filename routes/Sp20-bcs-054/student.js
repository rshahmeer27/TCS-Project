var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// Attempt Quiz
router.patch('/attemptQuiz', async (req, res, next) => {
	try {
		const sid = req.body.sid;
		const qid = req.body.qid;
		const score = req.body.score;
		const code = req.body.code;
		const result = await Student.updateOne(
			{ _id: sid, 'courses.code': code },
			{
				$set: {
					'courses.$[course].quiz.$[quiz].attempted': true,
					'courses.$[course].quiz.$[quiz].marks': score,
				},
			},
			{
				arrayFilters: [
					{
						'course.code': code,
					},
					{
						'quiz._id': qid,
					},
				],
			}
		);
		res.status(200).json({ message: 'Successfully Entered Marks', result });
	} catch (err) {
		res.status(500).json({});
	}
});

module.exports = router;
