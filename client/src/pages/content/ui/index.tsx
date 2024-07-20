import React from "react";

import "./index.scss";
import { Task } from "../../../entities/task";
import { useDispatch, useSelector } from "react-redux";
import { TodoState } from "../../../shared/types";
import { RootState } from "../../../store";

export const Content = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);
  console.log(todos);

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
          />
          <input
            className="descriptionInput"
            type="text"
            placeholder="Описание"
          />
        </div>
        <div className="todos">
          {todos.map(({ id, title, description }) => {
            return <Task task={title} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
};
