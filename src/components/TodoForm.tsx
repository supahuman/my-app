import TodoItem from "./TodoItem";

type TodoFormProps = {
  addTodo: () => void;
  newInput: string;
  setInput: (input: string) => void;
};

const TodoForm = ({ addTodo, newInput, setInput }: TodoFormProps) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <TodoItem newInput={newInput} setInput={setInput} />
      </form>
    </>
  );
};

export default TodoForm;
