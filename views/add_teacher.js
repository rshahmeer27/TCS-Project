const express = require('express')
const app = express()

// Set up EJS as the templating engine
app.set('view engine', 'ejs')

// Set up a route for the add-teacher view
app.get('/addTeacher', (req, res) => {
  res.render('addTeacher')
})

// Set up a route to handle the POST request from the form
app.post('/addTeacher', (req, res) => {
  // Validate the form data
  const name = req.body.name
  const subject = req.body.subject
  const contact = req.body.contact

  if (!name || !subject || !contact) {
    res.render('addTeacher', { error: 'Please fill out all fields' })
  } else {
    // Add the teacher to the database or storage system
    // ...

    // Redirect to the teachers page
    res.redirect('/teachers')
  }
})
