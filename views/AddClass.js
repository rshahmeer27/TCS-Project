app.post('/add-class', function(req, res) {
  var className = req.body.className;
  var numStudents = req.body.numStudents;

  if (!className || !numStudents) {
    // Render the form template and display an error message
    res.render('add-class-form', {error: 'All fields are required.'});
  } else {
    // Add the class to the database
    db.query('INSERT INTO classes (name, num_students) VALUES (?, ?)', [className, numStudents], function(error, results) {
      if (error) {
        // Render the form template and display an error message
        res.render('add-class-form', {error: 'An error occurred.'});
      } else {
        // Redirect to the list of classes
        res.redirect('/classes');
      }
    });
  }
});
