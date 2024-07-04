import React from "react";

import "./index.scss";
import { Task } from "../../../features/task";

export const Content = () => {
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
          {/* //TODO infinite scroll Отрисовка с бека */}
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  );
};
