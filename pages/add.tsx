import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Form from "./Form";

export default function Add() {
  return (
    <>
      <Box
        sx={{
          width: 650,
          height: 610,
          backgroundColor: "#fff5f5",
          border: "solid 5px #faf0b6",
          borderRadius: "5%",
          position: "absolute",
          left: "25%",
          top: "9%",
        }}
      >
        <Header />
        <Form />
      </Box>
    </>
  );
}
