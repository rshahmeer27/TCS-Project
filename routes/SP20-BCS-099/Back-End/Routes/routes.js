const express=require('express');
const router= express.Router();
const registerTeacher=require("../TeacherController/TeacherController")



router.route('/').post(registerTeacher);

module.exports = router;