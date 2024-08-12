import React from "react";
import { TaskProps } from "../../../shared/types";

// import { Checkbox } from "../../../shared/checkbox/ui";

import "./index.scss";

export const Task: React.FC<TaskProps> = (props: TaskProps) => {
  return (
    <div className="wrapTodo">
      <div className="left">
        <span>{props.task}</span>
        <span className="description">{props.description}</span>
      </div>
      <div className="right">
        <button onClick={props.click}>x</button>
        {/* <div>
          <Checkbox
            completed={props.completed}
            onChange={props.toggleCompleted}
          />
        </div> */}
      </div>
    </div>
  );
};
