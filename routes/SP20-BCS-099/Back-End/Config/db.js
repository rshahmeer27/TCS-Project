const mongoose=require('mongoose')
const dotenv=require("dotenv")
dotenv.config();
const connectDB=async()=>{
try {
    const conn=await mongoose.connect('mongodb+srv://usamaiftikhar:M%40lik021@cluster0.ss77y2d.mongodb.net/?retryWrites=true&w=majority',    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
 
    })
    console.log(`MongoDB connected:${conn.connection.host}`)
} catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
} 

};

module.exports=connectDB;