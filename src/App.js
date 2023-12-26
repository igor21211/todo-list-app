import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoActions from "./components/TodoActions/TodoActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplete: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const doubleClickHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const setCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplete: !todo.isComplete }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };
  const resetCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };

  const countComplete = todos.filter((todo) => todo.isComplete).length;
  console.log(countComplete);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 ? (
        <TodoActions
          countCom={!countComplete}
          resetTodos={resetTodosHandler}
          resetCompleted={resetCompletedTodos}
        />
      ) : (
        ""
      )}
      <TodoList
        todos={todos}
        setComp={setCompleteTodo}
        deleteTodo={doubleClickHandler}
      />
      {countComplete > 0 ? (
        <h2>
          You have {countComplete} done {countComplete > 1 ? "todos" : "todo"}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
