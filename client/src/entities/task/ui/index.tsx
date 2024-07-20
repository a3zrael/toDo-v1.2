import React from "react";

import "./index.scss";

interface TaskProps {
  task: string;
  description?: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
}

export const Task: React.FC<TaskProps> = (props: TaskProps) => {
  return (
    <div className="wrapTodo">
      <div className="left">
        <span>{props.task}</span>
        <span className="description">{props.description}</span>
      </div>
      <div className="right">
        <button onClick={props.click}>x</button>
        <div>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};
