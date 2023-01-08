var express = require('express');
var router = express.Router();
var Material = require('../../models/material');

router.get('/viewmaterials', function (req, res, next) {
	Material.find().exec(function (error, results) {
		if (error) {
			return next(error);
		}
		res.json(results);
	});
});

module.exports = router;