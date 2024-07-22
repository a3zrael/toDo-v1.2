import React from "react";

import "./index.scss";

interface CheckboxProps {
  completed: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <input
      type="checkbox"
      checked={props.completed}
      onChange={props.onChange}
    />
  );
};
