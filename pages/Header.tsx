import React from "react";
import styles from "./Header.module.css";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { getAuth, signOut } from "firebase/auth";
import Link from "next/link";

const Header = () => {
  // Logout
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("LogOut is successful");
        setTimeout(function () {
          // TODO: merge後にリンク先を指定する
          // <Link href="#"></Link>;
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          onClick={handleSignOut}
        />
        <p className={styles.headerLetter}>Log Out</p>
      </div>
    </>
  );
};

export default Header;
