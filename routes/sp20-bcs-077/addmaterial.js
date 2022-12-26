
var express = require('express');
var router = express.Router();

router.post("/addMaterial", (req, res, next) => {
    Material.create({
      teacher_id: req.body.teacher_id,
      title: req.body.title,
      MaterialType: req.body.MaterialType,
      UploadedOn: req.body.UploadedOn,
      filename: file.originalname,
      filesize: req.body.filesize,
      filetype: req.body.filetype,
    })
      .then(
        (result) => {
          console.log("material Uploaded");
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(result);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
  module.exports = router;
  