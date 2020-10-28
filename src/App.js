import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <Router basename="react-store/">
      <div className="App">
        <Header />
        <Content />
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
