var express = require("express");
var router = express.Router();
import teacher from '../../models/teacher'

router.get(
  "/viewteacherdashboard/:id",
  asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const id = req.params.id;
    console.log(req.body);
    const TeacherDashboard = await teacher.findById(id);
    console.log(TeacherDashboard);
    if (TeacherDashboard) {
      res.json({ data: TeacherDashboard });
    } else {
      throw new Error("Error Occured. Teacher Not Found");
    }
  })
);

module.exports = router;
