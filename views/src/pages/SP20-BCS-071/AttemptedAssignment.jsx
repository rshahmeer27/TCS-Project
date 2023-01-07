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
import axios from 'axios';
export const AttemptedAssignment = () => {
  function createData(title, dueDate, createdAt) {
    return { title, dueDate, createdAt };
  }

  const [rows,setrows] = useState([])

useEffect(()=>{
(async()=>{
let data = await axios.get('http://localhost:5000/assignment/63a828659646fc3dfc859a6f')
data = data.data
let rw = []
data.map((x)=>{
  rw.push(
    createData(x.title,new Date(x.dueDate),new Date(x.createdAt))
  )
})
setrows(rw)
console.log(data)
})()
},[])
console.log(rows)
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, my: 4 }}
          align="center"
        >
          Attempted Assignment (SP20-BCS-071)
        </Typography>
        <br />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Due Date</TableCell>
                <TableCell align="right">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">
                    {row.dueDate.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    {row.createdAt.toLocaleString()}
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
