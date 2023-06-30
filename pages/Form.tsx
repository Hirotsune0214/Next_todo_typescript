import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Firebase
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  Timestamp,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

type TodoListType = {
  id: string;
  text: string;
  timestamp: Timestamp;
  completed: boolean;
};

const Form: React.FC = () => {
  const [todos, setTodos] = useState<TodoListType[]>([]);
  const [inputText, setInputText] = useState<string>("");

  // 編集機能用のStates
  const [editingTodo, setEditingTodo] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  // Todoの入力
  const sendAdd = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const startEditing = (id: string, text: string) => {
    setEditingTodo(id);
    setEditText(text);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const saveEdit = async (id: string) => {
    if (editText === "") return;
    await updateDoc(doc(db, "todo", id), {
      text: editText,
    });
    setEditingTodo(null);

    // 更新後のデータを反映するために再取得する
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);

      let array: TodoListType[] = [];
      querySnapshot.forEach((doc) => {
        array.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setTodos(array);
    };
    fetchData();
  }, []);

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, "todo", id));
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <form onSubmit={sendAdd}>
        <TextField
          className={styles.textForm}
          label="Enter a Todo"
          type="text"
          onChange={handleChangeInput}
          value={inputText}
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
      <ul className={styles.allTodos}>
        {todos.map((todo) => (
          <li className={styles.singleTodo} key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <TextField
                  className={styles.editForm}
                  type="text"
                  value={editText}
                  onChange={handleEditInputChange}
                />
                <Button
                  onClick={() => saveEdit(todo.id)}
                  className={styles.editButton}
                  variant="outlined"
                  size="small"
                  startIcon={<EditIcon />}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <p className={styles.todoText}>{todo.text}</p>
                <Button
                  onClick={() => startEditing(todo.id, todo.text)}
                  className={styles.editButton}
                  variant="outlined"
                  size="small"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </>
            )}
            <Button
              onClick={() => deleteTodo(todo.id)}
              className={styles.deleteButton}
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Form;
