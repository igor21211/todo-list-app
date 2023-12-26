import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo, setComp }) {
  return (
    <div className={styles["todoListContainer"]}>
      {!todos.length ? (
        <h1>Todo list is empty</h1>
      ) : (
        todos.map((todo) => (
          <Todo
            setComp={setComp}
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
