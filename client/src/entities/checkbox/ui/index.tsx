import React, { useState } from "react";

import "./index.scss";

export const Checkbox = () => {
  const [val, setVal] = useState(false);
  console.log(val);
  return <input onClick={() => setVal((prev) => !prev)} type="checkbox" />;
};
