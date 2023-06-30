// // Chat GPTの修正済みのコード
// import { Button, TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import styles from "./Form.module.css";
// import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import { db } from "./firebase";
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   getDocs,
//   Timestamp,
//   serverTimestamp,
//   deleteDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";

// type TodoListType = {
//   id: string;
//   text: string;
//   timestamp: Timestamp;
//   completed: boolean;
// };

// const Form: React.FC = () => {
//   const [todos, setTodos] = useState<TodoListType[]>([]);
//   const [inputText, setInputText] = useState<string>("");

//   const sendAdd = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (inputText === "") {
//       alert("Please enter a valid todo");
//       return;
//     }
//     addDoc(collection(db, "todo"), {
//       text: inputText,
//       completed: false,
//       timestamp: serverTimestamp(),
//     })
//       .then(() => {
//         setInputText("");
//       })
//       .catch((error) => {
//         console.error("Error adding document: ", error);
//       });
//   };

//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputText(e.target.value);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));
//       const querySnapshot = await getDocs(q);

//       let array: TodoListType[] = [];
//       querySnapshot.forEach((doc) => {
//         array.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//       setTodos(array);
//     };

//     fetchData();
//   }, []);

//   // Delete
//   const deleteTodo = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "todo", id));
//       setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   };

//   // Edit
//   const editTodo = async (id: string) => {
//     try {
//       const todoRef = doc(db, "todo", id);
//       await updateDoc(todoRef, { completed: !todo.completed });
//     } catch (error) {
//       console.error("Error editing document: ", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={sendAdd}>
//         <TextField
//           className={styles.textForm}
//           label="Enter a Todo"
//           type="text"
//           onChange={handleChangeInput}
//           value={inputText}
//         />
//         <Button
//           type="submit"
//           className={styles.sendButton}
//           variant="contained"
//           endIcon={<SendOutlinedIcon />}
//         >
//           Send
//         </Button>
//       </form>
//       <ul className={styles.allTodos}>
//         {todos.map((todo) => (
//           <li className={styles.singleTodo} key={todo.id}>
//             <span className={styles.todoText}>{todo.text}</span>
//             <button>
//               <DeleteIcon onClick={() => deleteTodo(todo.id)} />
//             </button>
//             <button>
//               <EditIcon onClick={() => editTodo(todo.id)} />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Form;