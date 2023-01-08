var express = require("express");
var router = express.Router();
var Admin = require('../models/admin')
router.get(
  "/viewdashboard/:id",
  asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const id = req.params.id;
    console.log(req.body);
    const AdminDashboard = await Admin.findById(id);
    console.log(AdminDashboard);
    if (AdminDashboard) {
      res.json({ data: AdminDashboard });
    } else {
      throw new Error("Error Occured. Admin Not Found");
    }
  })
);