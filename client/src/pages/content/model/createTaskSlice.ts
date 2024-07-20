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
  todos: [
    { id: 1, title: "Learn Redux", completed: false },
    {
      id: 2,
      title: "Read TypeScript documentation",
      description:
        "Read TypeScript documentationRead TypeScript documentationRead TypeScript documentationRead TypeScript documentation",
      completed: true,
    },
  ],
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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
