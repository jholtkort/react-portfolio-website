import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar";
import HomeText from "./HomeText";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <HomeText />
      </div>
    );
  }
}

export default App;
