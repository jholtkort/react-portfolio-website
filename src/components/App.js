import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar";
import HomeText from "./HomeText";
import About from "./About";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <HomeText />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
