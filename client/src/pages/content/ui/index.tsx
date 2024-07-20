import React, { useState } from "react";

import { Task } from "../../../entities/task";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addTodo, deleteTodo } from "../model/createTaskSlice";

import "./index.scss";

export const Content: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState<string>("");

  const handleAddTodo = (): void => {
    if (title.trim() && description.trim()) {
      dispatch(addTodo({ title, description }));
      setTitle("");
      setDescription("");
    }
  };

  const handleDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="root">
      <div>
        <input className="searchInput" type="text" placeholder="Поиск задачи" />
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
          {todos.map(({ id, title, description }) => {
            return (
              <Task
                click={() => handleDeleteTodo(id)}
                key={id}
                task={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
