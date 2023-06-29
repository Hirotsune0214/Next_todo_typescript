import { Button, TextField } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import styles from "./Form.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// Firebase
import { db } from "./firebase";
// addDoc = データをCloud Firestoreに登録する際に使用
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { async } from "@firebase/util";

type TodoListType = {
  id: string;
  text: string;
  timestamp: Timestamp;
  completed: boolean;
};
const Form: React.FC = () => {
  const [todo, setTodo] = useState<TodoListType[]>([]);
  // { id: "", text: "", timestamp: Timestamp, completed: false },
  const [inputText, setInputText] = useState<string>("");

  const submitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: inputText,
      completed: false,
      timestamp: serverTimestamp(),
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
        });
      });
      // データの取得はできているがtextが空白になっている
      console.log(array);
      setTodo(array);
    })();
  }, []);

  return (
    <>
      {/*  onSubmit = formタグにつけて、送信前の内容のチェックや確認に使用する */}
      <form onSubmit={submitAdd}>
        <TextField
          className={styles.textForm}
          label="Enter a Todo"
          type="text"
          onChange={handleChangeInput}
        />
        {/* 
        TODO: エラーは出るが、formにkeyをつけないといけないと解決しない？？
        <AddCircleOutlineIcon
          type="submit"
          className={styles.sendButton}
          variant="contained"
        /> */}

        <Button
          type="submit"
          className={styles.sendButton}
          variant="contained"
          endIcon={<SendOutlinedIcon />}
        >
          Send
        </Button>
      </form>

      <ul className={styles.allTodos}>
        {todo.map((t) => (
          <li className={styles.singleTodo} key={t.id}>
            <span className={styles.todoText}>{t.text}</span>
            <button onClick={() => deleteTodo(t)}>
              <DeleteIcon />
            </button>
            <button onChange={() => editTodo(t)}>
              <EditIcon />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;

/*
id: doc.id,
          text: "",
          timestamp: undefined,
          completed: false,
*/
