import React, { useState } from "react";

import "./index.scss";

export const Checkbox = () => {
  const [val, setVal] = useState(false);
  return <input onClick={() => setVal((prev) => !prev)} type="checkbox" />;
};
