var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// Attempt Quiz
router.post("/view-attempted-quiz", function (req, res) {
  let totalQuizAttempted = 0;
  for (let i = 0; i < req.body.length; i++) {
    if (req.body[i].attempted === "true") {
      totalQuizAttempted++;
    }
  }
  res.send({
    totalQuizAttempted: totalQuizAttempted,
    totalQuiz: req.body.quizCount,
  });
});
//git commit -m "Completed"



module.exports = router;
