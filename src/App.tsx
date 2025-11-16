import { useState } from "react";
import { useTheme } from "./context/theme/ThemeContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

type Todo = {
  id: string;
  item: string;
  isCompleted: boolean;
};

function App() {
  const { theme, toggleTheme } = useTheme();
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

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  console.log("Rendering App with todos:", todos);
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>My Todo List</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
      </div>
      <TodoForm addTodo={addTodo} newInput={newInput} setInput={setInput} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
