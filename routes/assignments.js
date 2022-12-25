var express = require('express');
var router = express.Router();
var sp20bcs071 = require('./SP20-BCS-071-Muhammad-Touseef/assignment')

/* GET users listing. */



router.get('/:student', sp20bcs071.attemptedAssignments )

module.exports = router;
