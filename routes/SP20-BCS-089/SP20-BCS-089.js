var express = require('express');
var router = express.Router();
var Material = require('../../models/material');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

// Attempt Quiz
router.get('/get-materials/:mid', function (req, res) {
	Material.find({ _id: req.params.id }).exec((err, result) => {
		if (err) throw err;
		else res.status(200).json(result);
	});
});

module.exports = router;
