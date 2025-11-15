type TodoItemProps = {
  newInput: string;
  setInput: (input: string) => void;
};

const TodoItem = ({ newInput, setInput }: TodoItemProps) => {
  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={newInput}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </div>
  );
};

export default TodoItem;
