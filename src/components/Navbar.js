import React from "react";

import Pdf from "../static/josh-holtkort-resume.pdf";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light bg-transparent">
        <a href="/" className="navbar-brand">
          J/H
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link m-1 m-xl-5" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item m-1 m-xl-5">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item m-1 m-xl-5">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item m-1 m-xl-5">
              <a className="nav-link" href={Pdf} target="_blank">
                Resume
              </a>
            </li>
            <li className="nav-item m-1 m-xl-5">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
