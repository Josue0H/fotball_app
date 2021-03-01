import React from "react";
import HomePage from "./routes/HomePage";
import {HashRouter, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={HomePage}></Route>
    </HashRouter>
  );
}

export default App;
