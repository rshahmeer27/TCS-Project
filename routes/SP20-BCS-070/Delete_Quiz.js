var express = require('express');
var router = express.Router();

/* GET Operations */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

router.post("/deletequiz", asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const {id} = req.body;
    console.log(req.body);
    const Quiz = await Quiz.findById( id );
    console.log(Task);
    if (Quiz) {
      await Quiz.remove();
      res.json({ message: "Quiz has been removed" });
    } else {
      throw new Error("Error Occured. Quiz Not deleted");
    }
  }));

  module.exports = router;
