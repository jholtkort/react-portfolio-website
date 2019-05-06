import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar";
import HomeText from "./HomeText";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <HomeText />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
