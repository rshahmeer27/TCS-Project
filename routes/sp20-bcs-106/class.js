
var express = require("express");
var router = express.Router();

router.post("/api/modifyclass", asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const { id, name, students, teacher, subject  } = req.body
    console.log("Request body")
    console.log(req.body)
  
    
  
    const Class = await Admin.findById(id);
    console.log("Class to be updated")
    console.log(Class);
    if (Class) {
      console.log("Updating")
      Class.name = name;
      Class.students = students
      Class.teacher = teacher
      Class.subject= subject
     
      
      
      console.log("Updated Class")
      const updatedClass = await Class.save();
      console.log("Class saved")
      res.json(updatedClass);
    } else {
      res.status(400);
      throw new Error("Update Not Done");
    }
  }));
 
module.exports = router;

