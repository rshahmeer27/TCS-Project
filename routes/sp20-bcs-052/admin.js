var express = require('express');
var router = express.Router();

/* GET Operations */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
  
    Student.findByIdAndRemove(id, (err, student) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      res.json({ message: 'Student deleted' });
    });
  });
  
  module.exports = router;