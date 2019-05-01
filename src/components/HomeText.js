import React from "react";

import "./HomeText.css";

const HomeText = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 home-text">
          <h1>Welcome to the website of Josh Holtkort</h1>
          <h5 className="my-3">
            I am a software developer based out of Austin, TX, and am passionate
            about making responsive software and web applications that solve
            clients' biggest challenges.
          </h5>
          <div className="icons">
            <a className="mr-5" href="https://github.com/jholtkort">
              <i className="fab fa-github fa-3x" />
            </a>
            <a href="https://www.linkedin.com/in/joshholtkort">
              <i className="fab fa-linkedin-in fa-3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
