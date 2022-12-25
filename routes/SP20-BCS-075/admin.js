var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});


router.get('/attempted/:assignmentId', checkAuth, (req, res) => {
    // Get the assignment ID from the request parameters
    const assignmentId = req.params.assignmentId;
  
    // Look up the assignment in the database
    Assignment.findById(assignmentId, (err, assignment) => {
      if (err) {
        // If there was an error, return an error response
        return res.status(500).send(err);
      }
      if (!assignment) {
        // If the assignment was not found, return a 404 response
        return res.status(404).send('Assignment not found');
      }
  
      // Render the attempted assignment template
      res.render('attempted', { assignment });
    });
  });
  
  module.exports = router;