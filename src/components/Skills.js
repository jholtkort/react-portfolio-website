import React from "react";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="jumbotron">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 skills-text">
            <h1 className="text-center">My Skills</h1>
            <hr />
            <h5 className="my-3">
              I have knowledge and experience in the following technologies:
            </h5>

            <ul>
              <li className="my-4">
                <h5>JavaScript</h5>
              </li>
              <li className="mb-4">
                <h5>ES6</h5>
              </li>
              <li className="mb-4">
                <h5>React</h5>
              </li>
              <li className="mb-4">
                <h5>Redux</h5>
              </li>
              <li className="mb-4">
                <h5>Bootstrap</h5>
              </li>
              <li className="mb-4">
                <h5>Responsive HTML and CSS</h5>
              </li>
              <li className="mb-4">
                <h5>Python</h5>
              </li>
              <li className="mb-4">
                <h5>Git and GitHub</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
