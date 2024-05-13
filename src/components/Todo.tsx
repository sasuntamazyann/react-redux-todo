import { useState } from "react";
import { ITodo } from "../store/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/setup";
import { deleteTodo, sortTodosByCompleted, toggleTodoComplete } from "../store/features/todos/todoSlice";

const Todo: React.FC<ITodo & { index: number }> = ({
  title,
  completed,
  index,
}) => {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch<AppDispatch>();

  const toggleComplete = () => {
    setChecked((prev) => !prev);
    dispatch(toggleTodoComplete(index));
    dispatch(sortTodosByCompleted());
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(index));
  }

  return (
    <div className={`flex items-center gap-2 bg-gray-300 rounded-md p-4 ${checked ? "line-through" : ""}`}>
      <input type="checkbox" checked={checked} onChange={toggleComplete} />
      <span className="grow">{title}</span>
      <button className="p-2 bg-red-600 rounded-md" onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};
export default Todo;
