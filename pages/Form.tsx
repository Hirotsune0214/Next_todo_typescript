import { Button, TextField } from "@mui/material";
import React from "react";
import styles from "./Form.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Form = () => {
  return (
    <>
      <TextField className={styles.textForm} label="Enter a Todo" type="text" />
      <Button
        className={styles.sendButton}
        variant="contained"
         endIcon={<SendOutlinedIcon />}
      >
        Send
      </Button>

      
    </>
  );
};

export default Form;
