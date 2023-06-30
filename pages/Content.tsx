// import React from "react";
// import styles from "./Content.module.css";
// import { Timestamp } from "firebase/firestore";

// type ContentProps = {
//   timestamp: Timestamp;
//   text: string;
//   completed: boolean;
// };

// const Content: React.FC<ContentProps> = ({ text, completed, timestamp }) => {
//   return (
//     <div className="todos">
//       <div className="todoInfo">
//         <p>{text}</p>
//         <p>{completed}</p>
//         <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
//       </div>
//     </div>
//   );
// };

// //
// export default Content;

// /*
//   // Delete todo
//   const deleteTodo = async (t: TodoListType) => {
//     await deleteDoc(doc(db, "todo", t.id));
//     console.log("Worked");
//   };

//   // Edit todo
//   const editTodo = async (t: TodoListType) => {
//     await updateDoc(doc(db, "todo", t.id), {
//       completed: !t.completed,
//     });
//     console.log("Worked");
//   };
//   */

// /*

// {todos.map((todo, index) => {
//         <Content
//           key={index}
//           text={todo.text}
//           timestamp={todo.timestamp}
//           completed={false}
//         />;
//       })}
//   */
