var mongoose = require("mongoose");
var schema = mongoose.Schema;

var resultSchema = new schema({
    classId : {
        type : String,
        required : true,
    },
    courseId : {
        type : String,
        required : true,
    },
    courseName : String,
    teacherName : {
        type : String,
        required : true,
    },
    totalMarks : Number,
    obtMarks : Number,
    gpa : Number,
})

export default mongoose.model('Result', resultSchema);
