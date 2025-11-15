type Todo = {
  id: string;
  item: string;
  isCompleted: boolean;
};

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
};

const TodoList = ({ todos, toggleTodo }: Props) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.isCompleted ? "completed" : ""}>
                {todo.item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
