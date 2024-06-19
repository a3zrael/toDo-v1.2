import React from "react";

import { Checkbox } from "../../../entities/checkbox";

import "./index.scss";
export const Task = () => {
  return (
    <div className="wrapTodo">
      <div className="todo">
        task <Checkbox />
      </div>
      <div className="description">description</div>
    </div>
  );
};
