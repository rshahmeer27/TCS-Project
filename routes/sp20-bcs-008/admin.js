var express = require('express');
var router = express.Router();
router.delete('/delteacher/:id', function (req, res, next) {
	Teacher.deleteOne({ _id: req.params.id }, function (error, results) {
		if (error) {
			return next(error);
		}
		// Respond with valid data
		res.json(results);
	});
});
module.exports = router;