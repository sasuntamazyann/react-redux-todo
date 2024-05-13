import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <main className="h-dvh flex justify-center items-center">
      <div className="w-1/2 flex flex-col gap-20">
        <CreateTodo />
        <Todos />
      </div>
    </main>
  );
};
export default App;
