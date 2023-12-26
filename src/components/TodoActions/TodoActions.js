import React from "react";
import styles from "./TodoActions.module.css";
import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

function TodoActions({ resetTodos, resetCompleted, countCom }) {
  return (
    <div className={styles["actionsContainer"]}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={resetCompleted}
        disable={countCom}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
