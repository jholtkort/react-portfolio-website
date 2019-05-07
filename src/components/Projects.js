import React from "react";

import { projects } from "../projectList/projects";
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
              {projects.map(x => (
                <div className="card col-10 col-lg-5 my-5" key={x.id}>
                  <img
                    src={x.image}
                    alt={x.title}
                    className="card-img-top my-3"
                  />
                  <h5>{x.title}</h5>
                  <p className="card-text">{x.description}</p>
                  <div className="row justify-content-around mb-3">
                    <a
                      className="btn btn-primary btn-lg my-3"
                      href={x.websiteLink}
                    >
                      {x.title} Homepage
                    </a>
                    <a className="mr-5" href={x.gitHubLink}>
                      <i className="fab fa-github fa-3x my-3 ml-3" />
                    </a>
                  </div>
                </div>
              ))}

              {/* <div className="card col-10 col-lg-5 my-5">
                <img
                  src="https://images.unsplash.com/photo-1547845662-08919068676f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1368&q=80"
                  alt="weather app"
                  className="card-img-top my-3"
                />
                <h5>Weather App</h5>
                <p className="card-text">
                  React application that fetches weather information from the
                  Open Weather Map API, and renders a background based off of
                  the received data.
                </p>
                <div className="row justify-content-around mb-3">
                  <a
                    className="btn btn-primary btn-lg"
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
              </div>

              <div className="card col-10 col-lg-5 my-5">
                <img
                  src="https://images.unsplash.com/photo-1548360247-d7f05b9b4865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="weather app"
                  className="card-img-top my-3"
                />
                <h5>Reactive Webpage</h5>
                <p className="card-text">
                  React application that uses Bootstrap 4 to create a responsive
                  webpage layout.
                </p>

                <div className="row justify-content-around mb-3">
                  <a
                    className="btn btn-primary btn-lg"
                    href="https://jholtkort.github.io/responsive-webpage/"
                  >
                    Responsive Webpage
                  </a>
                  <a
                    className="mr-5"
                    href="https://github.com/jholtkort/responsive-webpage"
                  >
                    <i className="fab fa-github fa-3x" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
