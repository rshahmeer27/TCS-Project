import React from "react";
import ReactDOM from "react-dom";
import Classes from 'viewClasses';
var Classes = require('../../models/class')

const express = require('express');
const app = express();

class StudentView {
  constructor(student) {
    this.id = student.code;
    this.name = student.name;
    this.email = student.marks;
    this.gpa = student.quiz;
  }
}

class StudentListView {
  constructor(students) {
    this.students = students.map(student => new StudentView(student));
  }
}

app.get('/students', (req, res) => {
  const students = getAllStudents(); 
  const view = new StudentListView(students);
  res.send(view);
});

app.get('/students/:id', (req, res) => {
  const student = getStudentById(req.params.id); 
  const view = new StudentView(student);
  res.send(view);
});