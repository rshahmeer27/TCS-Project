import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";

import { Route, Routes, Link } from "react-router-dom";
import { AttemptedAssignment } from "./pages/SP20-BCS-071/AttemptedAssignment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TCS Assignment
        </Typography>
      </AppBar>
    </Box>
  );
};

export default function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SP20-BCS-071" element={<AttemptedAssignment />} />
      </Routes>
    </>
  );
}

const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Stack spacing={2}>
            <Link to="/SP20-BCS-071">
              <Item>Muhammad Touseef (SP20-BCS-071) </Item>
            </Link>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
