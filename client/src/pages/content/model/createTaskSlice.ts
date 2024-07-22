import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface AddTodoPayload {
  title: string;
  description?: string;
}

interface TodoState {
  todos: Todo[];
  searchTodos: Todo[];
  searchTerm: string;
}

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
  },
});

export const { addTodo, deleteTodo, searchTodo } = todoSlice.actions;

export default todoSlice.reducer;
