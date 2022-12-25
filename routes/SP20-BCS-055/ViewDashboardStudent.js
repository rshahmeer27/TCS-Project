var express = require("express");
var router = express.Router();

router.get(
  "/viewdashboard/:id",
  asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const id = req.params.id;
    console.log(req.body);
    const StudentDashboard = await Student.findById(id);
    console.log(StudentDashboard);
    if (StudentDashboard) {
      res.json({ data: StudentDashboard });
    } else {
      throw new Error("Error Occured. Student Not Found");
    }
  })
);

module.exports = router;
