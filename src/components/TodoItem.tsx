type TodoItemProps = {
  newInput: string;
  setInput: (input: string) => void;
};

const TodoItem = ({ newInput, setInput }: TodoItemProps) => {
  return (
    <div>
      <input
        type="text"
        value={newInput}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </div>
  );
};

export default TodoItem;
