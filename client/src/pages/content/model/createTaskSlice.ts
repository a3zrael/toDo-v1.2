// features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

interface AddTodoPayload {
  title: string;
  description: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
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
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
