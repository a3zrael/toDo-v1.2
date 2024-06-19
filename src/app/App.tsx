import "./App.scss";

import { Fragment } from "react/jsx-runtime";
import { Header } from "../entities/header";
import { Content } from "../entities/content";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
};

export default App;
