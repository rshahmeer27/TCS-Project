var express = require('express');
const Student = require('../models/student');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

router.put('/addmarks/:stid/:coursecode/:marks', function (req, res, next){
		const query = { _id: req.params.stid, "courses.code": req.params.coursecode };
    	const updateDocument = {
      	$set: { "courses.$.marks": req.params.marks }
    	};
    	const result =  Student.updateOne(query, updateDocument, function(err, data){
			if(err) throw err;
			res.json(data);
		});
		

	//);
});

module.exports = router;
