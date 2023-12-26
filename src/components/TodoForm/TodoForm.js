import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles["todoFormContainer"]}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          type="text"
          placeholder="Enter new Todo"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default TodoForm;
