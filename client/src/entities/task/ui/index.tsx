import React from "react";

import { Checkbox } from "../../../shared/checkbox";

import "./index.scss";

interface TaskProps {
  task: string;
  description?: string;
}

export const Task = (props: TaskProps) => {
  return (
    <div className="wrapTodo">
      <div className="todo">
        <span>{props.task}</span> <Checkbox />
      </div>
      <span className="description">{props.description}</span>
    </div>
  );
};
