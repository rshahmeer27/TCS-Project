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

export const DeleteAssignment = () => {
  function createData(title, dueDate, createdAt) {
    return { title, dueDate, createdAt };
  }

  const [rows, setrows] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await axios.get(
        `${process.env.REACT_APP_API_URL}assignment/63a828659646fc3dfc859a6f`
      );
      data = data.data;
      let rw = [];
      data.map((x) => {
        rw.push(
          createData(x.title, new Date(x.dueDate), new Date(x.createdAt))
        );
      });
      setrows(rw);
    })();
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
          Delete Assignment (SP20-BCS-076)
        </Typography>
        <br />


        <center><h1>Enter ID of Assignment That You Wish To Delete</h1></center>

        <center>
          <form>
            <label>
              <input type="text" name="id" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </center>

      </Box>
    </Container>
  );
};
