const express=require("express");
const dotenv=require("dotenv");
const connectDB=require('./Config/db')
const TeacherRoutes=require('./Routes/routes')
const app=express();
const cors = require('cors');

connectDB();
dotenv.config();
 
const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server started on Port ${PORT}`));
app.use(express.json());


app.use(cors());
app.use(
  cors({
    origin:'*',
    credentials: true
  })
)
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/admin/addTeacher',TeacherRoutes);