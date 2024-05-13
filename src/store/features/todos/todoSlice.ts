import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, ITodos } from "../../types";

const initialState: ITodos = {
  todos: [
    {
      title: "Todo 1",
      completed: false,
    },
    {
      title: "Todo 2",
      completed: false,
    },
    {
      title: "Todo 3",
      completed: false,
    },
    {
      title: "Todo 4",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    toggleTodoComplete(state, action: PayloadAction<number>) {
      state.todos = state.todos.map((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    sortTodosByCompleted(state) {
      state.todos = state.todos.sort(
        (a, b) => Number(a.completed) - Number(b.completed)
      );
    },
  },
  selectors: {
    getTodos: (state) => state.todos,
  },
});

export const { addTodo, deleteTodo, toggleTodoComplete, sortTodosByCompleted } =
  todoSlice.actions;
export const { getTodos } = todoSlice.selectors;

export default todoSlice.reducer;
