import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../pages/content/model/createTaskSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
