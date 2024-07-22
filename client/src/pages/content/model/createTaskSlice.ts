import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTodoPayload, Todo, TodoState } from "../../../shared/types";

const initialState: TodoState = {
  todos: [],
  searchTodos: [],
  searchTerm: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<AddTodoPayload>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload?.description,
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    searchTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.searchTodos = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    toggleTodoComplete: (state: TodoState, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, searchTodo, toggleTodoComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
