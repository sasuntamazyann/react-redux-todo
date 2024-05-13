import { useSelector } from "react-redux";
import { getTodos } from "../store/features/todos/todoSlice";
import Todo from "./Todo";

const Todos = () => {
  const todos = useSelector(getTodos);
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo, i) => (
        <Todo key={todo.title} title={todo.title} completed={todo.completed} index={i} />
      ))}
    </div>
  );
};
export default Todos;
