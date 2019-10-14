import React, { Component } from "react";

import "./App.css";
import Navigation from "./Navigation";
import HomeText from "./HomeText";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <HomeText />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
