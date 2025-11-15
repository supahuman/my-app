import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

type Todo = {
  id: string;
  item: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newInput, setInput] = useState<string>("");

  const addTodo = () => {
    if (!newInput.trim()) return;
    // Create a new todo item
    const todo: Todo = {
      id: crypto.randomUUID(), // Works directly in browser
      item: newInput,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  console.log("Rendering App with todos:", todos);
  return (
    <div>
      <TodoForm addTodo={addTodo} newInput={newInput} setInput={setInput} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
