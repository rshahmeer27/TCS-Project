const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/teachers', (req, res) => {
  const newTeacher = req.body;
  db.query('INSERT INTO teachers SET ?', newTeacher, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`Teacher added with ID: ${results.insertId}`);
  });
});

module.exports = router;