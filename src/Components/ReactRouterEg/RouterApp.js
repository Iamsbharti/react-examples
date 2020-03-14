import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Route, Link, Switch } from "react-router-dom";

function RouterApp() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default RouterApp;
