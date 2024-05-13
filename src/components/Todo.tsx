import { useState } from "react";
import { ITodo } from "../store/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/setup";
import {
  deleteTodo,
  editTodo,
  sortTodosByCompleted,
  toggleTodoComplete,
} from "../store/features/todos/todoSlice";

const Todo: React.FC<ITodo & { index: number }> = ({
  title,
  completed,
  index,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(completed);
  const [editText, setEditText] = useState(title);
  const dispatch = useDispatch<AppDispatch>();

  const toggleComplete = () => {
    setChecked((prev) => !prev);
    dispatch(toggleTodoComplete(index));
    dispatch(sortTodosByCompleted());
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(index));
  };

  const handleEditSaveClick = () => {
    if (isEditing) {
      setIsEditing(false);
      dispatch(editTodo({ title: editText, index }));
      return;
    }
    setIsEditing(true);
  };

  return (
    <div className={`flex items-center gap-2 bg-gray-300 rounded-md p-4 `}>
      <input type="checkbox" checked={checked} onChange={toggleComplete} />
      <div className={`grow ${completed ? 'line-through' : ''}`}>
        {isEditing ? (
          <input
            className="text-xl outline-none w-full bg-transparent"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span>{title}</span>
        )}
      </div>
      <button
        className="p-2 bg-green-600 rounded-md no-underline"
        onClick={handleEditSaveClick}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="p-2 bg-red-600 rounded-md no-underline"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};
export default Todo;
