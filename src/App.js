import React from "react";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
