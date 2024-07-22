import React, { useState } from "react";

import { Task } from "../../../entities/task";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { addTodo, deleteTodo, searchTodo } from "../model/createTaskSlice";

import { Todo } from "../../../shared/types";

import "./index.scss";

export const Content: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const searchTerm = useSelector((state: RootState) => state.todos.searchTerm);
  const searchTodos = useSelector(
    (state: RootState) => state.todos.searchTodos
  );

  const dispatch: AppDispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const isSearchActive = searchTerm !== "";

  const handleAddTodo = (): void => {
    if (title.trim() && description.trim()) {
      dispatch(addTodo({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="root">
      <div>
        <input
          onChange={(e) => {
            dispatch(searchTodo(e.target.value));
          }}
          className="searchInput"
          value={searchTerm}
          type="text"
          placeholder="Поиск задачи"
        />
      </div>
      <div>
        <div className="inputWrap">
          <input
            className="taskInput"
            type="text"
            placeholder="Введите задачу"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="descriptionInput"
            type="text"
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddTodo}>add</button>
        </div>
        <div className="todos">
          {isSearchActive ? (
            searchTodos.length !== 0 ? (
              searchTodos.map((todo: Todo) => (
                <Task
                  click={() => dispatch(deleteTodo(todo.id))}
                  key={todo.id}
                  task={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  // toggleCompleted={dispatch(toggleTodoComplete(todo.id))}
                />
              ))
            ) : (
              <p className="no_todo">No tasks found.</p>
            )
          ) : (
            todos.map((todo: Todo) => (
              <Task
                click={() => dispatch(deleteTodo(todo.id))}
                key={todo.id}
                task={todo.title}
                description={todo.description}
                completed={todo.completed}
                // toggleCompleted={dispatch(toggleTodoComplete(todo.id))}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
