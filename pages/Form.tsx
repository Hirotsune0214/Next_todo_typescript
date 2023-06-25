import { Button, TextField } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import styles from "./Form.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

// Firebase
import { db } from "./firebase";
// addDoc = データをCloud Firestoreに登録する際に使用
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { timeStamp } from "console";

type TodoListType = {
  id: string;
  text: string;
  timestamp: any;
};
const Form: React.FC = () => {
  const [todo, setTodo] = useState<TodoListType[]>([
    { id: "", text: "", timestamp: null },
  ]);
  const [inputText, setInputText] = useState("");

  const submitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: inputText,
      completed: false,
      timeStamp: serverTimestamp(),
    });
    setInputText("");
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));

    const unSubscribe = onSnapshot(q, async (snapshot) => {
      setTodo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timeStamp,
        }))
      );
    });
    console.log(unSubscribe());
    return () => unSubscribe();
  }, []);

  useEffect(() => {});

  return (
    <>
      // onSubmit = formタグにつけて、送信前の内容のチェックや確認に使用する
      <form onSubmit={submitAdd}>
        <TextField
          className={styles.textForm}
          label="Enter a Todo"
          type="text"
          onChange={handleChangeInput}
        />
        <Button
          type="submit"
          className={styles.sendButton}
          variant="contained"
          endIcon={<SendOutlinedIcon />}
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;
