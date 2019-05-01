import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import HomeText from "./HomeText";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeText} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
