var express = require('express');
var router = express.Router();
var sp20bcs071 = require('./SP20-BCS-071-Muhammad-Touseef/assignment')
var sp20bcs056 = require('./SP20-BCS-056/ViewAssignmentRoute')

/* GET users listing. */


router.get('/view/:id' , sp20bcs056.viewAssignments)
router.get('/:student', sp20bcs071.attemptedAssignments )

module.exports = router;
