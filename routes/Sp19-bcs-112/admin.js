var express = require('express');
var router = express.Router();

router.delete('/delclass/:id', function (req, res, next) {
	Class.deleteOne({ _id: req.params.id }, function (error, results) {
		if (error) {
			return next(error);
		}
		
		res.json(results);
	});
});

module.exports = router;