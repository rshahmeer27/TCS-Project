const express = require("express");
const app = express();

app.get("/admin/dashboard", function (req, res) {
  // check if the user is an admin
  if (!req.user.isAdmin) {
    res.status(401).send("Unauthorized");
    return;
  }

  // render the admin dashboard page
  res.render("admin/dashboard");
});
