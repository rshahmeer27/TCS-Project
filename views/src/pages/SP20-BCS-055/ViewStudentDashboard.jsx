import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useParams } from "react-router";


 const ViewStudentDashbaord = () => {
     const [studentdata, setstudentdata] = useState([])
     const {id} = useParams()

     const getstudentdata = async () => {
        const data = await axios.get(
          "http://localhost:5000/student/viewdashboard/" + id
        )
        
        setstudentdata(data.data);
    }

  useEffect(() => {
    getstudentdata();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, my: 4 }}
          align="center"
        >
          Student Dashboard (SP20-BCS-055)
        </Typography>
        <br />
        {studentdata && <h5>Name: {studentdata.name}</h5>}
        {studentdata && <h5>Roll No: {studentdata.rollno}</h5>}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Course Code</TableCell>
                <TableCell align="right">Course Name</TableCell>
                <TableCell align="right">Course Marks</TableCell>
                <TableCell align="right">Course Quiz</TableCell>
                <TableCell align="right">Course Assignment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentdata &&
                studentdata.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.code}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.marks}</TableCell>
                    <TableCell align="right">
                      <Link to="/" className="btn btn-primary">
                        View Quizes
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Link to="/" className="btn btn-primary">
                        View Assignments
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default ViewStudentDashbaord;