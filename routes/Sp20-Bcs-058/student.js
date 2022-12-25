var express = require('express');
var router = express.Router();


app.get('/download', (req, res) => {
    
    const file = `${__dirname}/path/to/file.zip`;
    res.download(file);
  });


  module.exports = router;