import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
