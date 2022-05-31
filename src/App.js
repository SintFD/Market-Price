import React from "react";
import { Route } from "react-router-dom";

import "./reset.css";

const button =()=>{
  fetch('http://localhost:3001/user/xiaomi').then((r)=>r.json()).then((d)=>{
    console.log(d.items)
    console.log(d.pagination)
  })
}

function App() {
  return (
    <div className="app">
      <Route exact path="/"></Route>
      <button onClick={button}>aaa</button>
    </div>
  );
}

export default App;
