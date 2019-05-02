import React from "react";
import weatherApp from "../static/weather-app-project.png";
import responsiveWebpage from "../static/reactive-webpage-project.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="jumbotron">
        <div className="row justify-content-around">
          <div className="col-10 project text">
            <h1 className="project-text text-center">Projects</h1>
            <hr />

            <div className="row justify-content-around">
              <div className="card col-10 col-lg-5 my-5">
                <img
                  src={weatherApp}
                  alt="weather app"
                  className="card-img-top"
                />
                <h5>Weather App</h5>
                <p className="card-text">
                  React application that fetches weather information from the
                  Open Weather Map API, and renders a background based off of
                  the received data.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://jholtkort.github.io/weather-app/"
                >
                  Weather App Webpage
                </a>
                <a
                  className="mr-5"
                  href="https://github.com/jholtkort/weather-app"
                >
                  <i className="fab fa-github fa-3x" />
                </a>
              </div>

              <div className="card col-10 col-lg-5 my-5">
                <img
                  src={responsiveWebpage}
                  alt="weather app"
                  className="card-img-top"
                />
                <h5>Reactive Webpage</h5>
                <p className="card-text">
                  React application that uses Bootstrap 4 to create a responsive
                  webpage layout.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://jholtkort.github.io/responsive-webpage/"
                >
                  Weather App Webpage
                </a>
                <a
                  className="mr-5"
                  href="https://github.com/jholtkort/responsive-webpage"
                >
                  <i className="fab fa-github fa-3x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
