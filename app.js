var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var studentRouter = require("./routes/student");
var MaterialRouter = require("./routes/Sp20-bcs-083/ViewMaterials");
var teacherRouter = require("./routes/teacher");
var assignmentRouter = require("./routes/assignments");
var deleteAssignment = require("./routes/SP20-BCS-076/deleteAssignment");
var TeacherDashboard = require("./routes/SP20-BCS-066")
var headRouter = require("./routes/head");
var graphRouter = require("./routes/Sp20-bcs-093/graphs");
var ClassesRouter = require("./routes/SP20-BCS-113/viewClasses.js","./routes/teacher","./routes/student");
var addstudenttoclass = require ("./routes/SP19-BCS-107/ASTC.js")
const connection = mongoose.connect("mongodb://localhost:27017/lms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var app = express();

connection.then(
  (db) => {
    console.log("Connected correctly to server");
  },
  (err) => {
    console.log(err);
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/viewmaterials", MaterialRouter);
app.use("/head", headRouter);
app.use("/teacher", teacherRouter);
app.use("/result/class/:id", teacherRouter);
app.use("/admin", adminRouter);
app.use("/student", studentRouter);
app.use("/graphs", graphRouter);
app.use("/assignment", assignmentRouter);
app.use("/teacherdashboard", TeacherDashboard);
app.use("/viewClasses",ClassesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
