import React from "react";

import { Fragment } from "react/jsx-runtime";
import { Header } from "../shared/header";
import { Content } from "../pages/content";

import "./App.scss";

export const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
};

export default App;
