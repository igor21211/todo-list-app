import React from "react";
import styles from "./Todo.module.css";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, deleteTodo, setComp }) {
  const { id, text, isComplete } = todo;
  return (
    <div className={`${styles.todo} ${isComplete ? styles.todoComplete : ""}`}>
      <RiTodoFill className={styles["todoIcon"]} />
      <div className={styles["todoText"]}>{text}</div>
      <RiDeleteBin2Line
        onClick={() => deleteTodo(id)}
        className={styles["deleteIcon"]}
      />
      <FaCheck onClick={() => setComp(id)} className={styles["checkIcon"]} />
    </div>
  );
}

export default Todo;
