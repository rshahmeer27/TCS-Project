const express = require('express');
const router = express.Router();

// Class model
const Class = require('../models/class');

// Student model
const Student = require('../models/student');

router.post('/add', async (req, res) => {
  try {
    // Find the class
    const classToAddTo = await Class.findById(req.body.classId);
    if (!classToAddTo) {
      return res.status(404).send({ message: 'Class not found' });
    }

    // Find the student
    const student = await Student.findById(req.body.studentId);
    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    // Add the student to the class
    classToAddTo.students.push(student);
    await classToAddTo.save();

    res.send({ message: 'Student added to class' });
  } catch (error) {
    res.status(500).send({ message: 'Error adding student to class' });
  }
});

module.exports = router;
