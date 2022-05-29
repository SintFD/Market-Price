import React from "react";
import Home from "./home/Home";
import Filter from "./filter/Filter";
import Result from "./result/Result";
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
