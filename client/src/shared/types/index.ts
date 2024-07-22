export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export interface AddTodoPayload {
  title: string;
  description?: string;
}

export interface TodoState {
  todos: Todo[];
  searchTodos: Todo[];
  searchTerm: string;
}

export interface TaskProps {
  task: string;
  description?: string;
  completed: boolean;
  click: React.MouseEventHandler<HTMLButtonElement>;
}
