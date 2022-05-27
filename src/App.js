import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/Main";

import "./reset.css";

function App() {
  return (
    <div className="app">
      {/* <Route exact path="/"> */}
      <Main />
      {/* </Route> */}
    </div>
  );
}

export default App;
