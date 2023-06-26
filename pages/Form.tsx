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
  getDocs,
} from "firebase/firestore";
import { timeStamp } from "console";

type TodoListType = {
  id: string;
  text: string;
  timestamp: any;
  completed: boolean;
};
const Form: React.FC = () => {
  const [todo, setTodo] = useState<TodoListType[]>([
    { id: "", text: "", timestamp: null, completed: false },
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

    (async () => {
      const querySnapshot = await getDocs(collection(db, "todo"));
      // データの取得はできている
      // console.log(querySnapshot);

      let array: TodoListType[] = [];
      querySnapshot.forEach((doc) => {
        return array.push({
          ...doc.data(),
          id: doc.id,
          text: "",
          timestamp: undefined,
          completed: false,
        });
      });
      // データの取得はできている
      // console.log(array);
      setTodo(array);
    })();
  }, []);

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
