var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();
const Student = require("../../models/student");

// Attempt Quiz
router.get("/view-attempted-quiz/:sid", function (req, res) {
  var students = Student.find(req.params.id);
  const attemptedQuiz = students.filter(
    (student) => student.courses.quiz.attempted
  );
  res.send(attemptedQuiz);

  // res.send({
    // name: student.name,
    // rollno: student.rollno,
    // courses: [
    //   {
    //     code: student.courses.code,
    //     name: student.courses.name,
    //     marks: student.courses.marks,
    //     quiz: [
    //       {
    //         qid: student.courses.quiz.qid,
    //         attempted: student.courses.quiz.attempted,
    //         marks: student.courses.quiz.marks,
    //       },
    //     ],
    //   },
    // ],
    // student,
  });
  //  _id: "63b9ccce3c8288e477cf0764",
  // name: "talha",
  // rollno: "SP20-BCS-068",
  // courses: [
  //   {
  //     code: "cs68",
  //     name: "cALCULUS",
  //     marks: 123,
  //     quiz: [
  //       {
  //         qid: "112",
  //         attempted: true,
  //         marks: 442,
  //       },
  //     ],
  //   },
  // ],

module.exports = router;
