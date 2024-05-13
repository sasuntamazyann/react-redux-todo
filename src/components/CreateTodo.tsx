import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/setup";
import { addTodo } from "../store/features/todos/todoSlice";
import { useState } from "react";

const CreateTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleAddTodo = () => {
    if (!todoText) return;
    dispatch(addTodo({ title: todoText, completed: false }));
    setTodoText("");
  };

  return (
    <div>
      <h1 className="text-2xl">createTodo</h1>
      <div className="flex gap-2">
        <input
          className="w-full bg-gray-300 p-4 text-xl rounded-md"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
          type="text"
        />
        <button className="p-4 bg-green-600 rounded-md" onClick={handleAddTodo}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
