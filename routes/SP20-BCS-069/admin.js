const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// Middleware to check if the user is authorized to download the quiz

router.get('/quizzes/:id', (req, res) => {
  const quizId = req.params.id;
  // Find the quiz in the database
  Quiz.findById(quizId, (err, quiz) => {
    if (err) {
      // Handle error
      return res.status(500).send('Error finding quiz in database');
    }
    if (!quiz) {
      // Quiz not found
      return res.status(404).send('Quiz not found');
    }
      // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quiz.pdf');
       // Read quiz data from file system
    const filePath = path.join(__dirname, '../../quizzes/', quiz.fileName);
    fs.createReadStream(filePath).pipe(res);
  });
});
module.exports = router