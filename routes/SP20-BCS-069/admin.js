const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
// Middleware to check if the user is authorized to download the quiz
const checkAuth = (req, res, next) => {
  function isAuthorizedToDownloadQuizCode(user) {
  if (user.isAdmin) {
    return true;
  } else if (user.permissions.includes('downloadQuizCode')) {
    return true;
  } else {
    return false;
  }
}
if (isAuthorizedToDownloadQuizCode(user)) {
  // Allow the user to download the quiz complete code
} else {
  // Show an error message or redirect the user to a different page
}
 next();
};
router.get('/api/quizzes/:id/download', checkAuth, (req, res) => {
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
module.exports = router;