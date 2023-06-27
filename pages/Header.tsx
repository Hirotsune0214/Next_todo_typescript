import React from "react";
import styles from "./Header.module.css";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const Header = () => {
  return (
    <>
      <h1 className={styles.header}>Todo-List</h1>
      <div className={styles.headerIcon}>
        <DirectionsRunIcon
          sx={{
            color: "black",
            fontSize: "40px",
            // 書き方を聞く
            // position: "absolute left-50px",
          }}
        />
        <p className={styles.headerLetter}>Log Out</p>
      </div>
    </>
  );
};

export default Header;
