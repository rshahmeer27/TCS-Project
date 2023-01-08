const Teacher=require('../Models/TeacherModel')
const asyncHandler=require('express-async-handler');

const registerTeacher=asyncHandler(async(req,res)=>{
        console.log('usama');
       const {name,designation}=req.body;

       console.log(name, designation);
     
       if(!name || !designation){
        res.status(400);
        throw new Error("Please Enter All the fields");
       }
       const TeacherExists= await Teacher.findOne({name})
       if(TeacherExists){
        res.status(400);
        throw new Error("Teacher already Exists");
       }

       const teacher=await Teacher.create({
        name,
        designation
       
       });

       if(teacher){
        res.status(201).json({
            _id:teacher._id,
            name:teacher.name,
            designation:teacher.designation,
          
       });
       }else{
        res.status(400);
        throw new Error("Failed to create the Teacher");
       }
     
});

module.exports=registerTeacher;

