import React from "react";
import HomePage from "./routes/HomePage";
import {HashRouter, Route} from "react-router-dom";
import TeamPage from "./routes/TeamPage";
import LeaguePage from "./routes/LeaguePage";
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={HomePage}></Route>
      <Route path="/league/:name" component={LeaguePage}></Route>
      <Route path="/team/:name" component={TeamPage}></Route>
    </HashRouter>
  );
}

export default App;
