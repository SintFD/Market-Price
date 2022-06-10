import React from "react";
import Home from "../Home/Home.jsx";
import Filter from "./.././Filter/Filter.jsx";
import Result from "../result/Result";
import { Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/filter" exact component={Filter} />
      <Route path="/filter/result" exact component={Result} />
    </div>
  );
}

export default Main;
