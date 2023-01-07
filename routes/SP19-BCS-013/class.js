var express = require("express");
var router = express.Router();

router.post("/api/modifyclass", asyncHandler(async (req, res) => {
    const { id, name, students, teacher, subject  } = req.body
    const Class = await Admin.findById(id);
    if (Class) {
      Class.name = name;
      Class.students = students;
      Class.teacher = teacher;
      Class.subject= subject;
      const updatedClass = await Class.save();
      res.json(updatedClass);
    } else {
      res.status(400);
      throw new Error("Error");
    }
  }));
 
module.exports = router;

