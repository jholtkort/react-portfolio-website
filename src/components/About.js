import React from "react";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="jumbotron">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 about-text">
            <h1 className="text-center">About Me</h1>
            <hr />
            <h5 className="mt-3">
              Originally from San Angelo, Texas, I have a Bachelor of Science in
              Mechanical Engineering and a Business Foundations Certificate from
              The University of Texas at Austin.
            </h5>
            <h5 className="mt-3">
              While working as a Cost Estimator for two and a half years at
              AECOM Hunt, I developed an interest in software development and
              decided that I wanted to pursue a career as a software developer.
              Since that time, I have earned the following qualifications:
              <ul>
                <li className="mt-3 ml-3">
                  Responsive Web Design Certification from freeCodeCamp
                </li>
                <li className="mt-3 ml-3">
                  JavaScript Algorithms and Data Structures Certification from
                  freeCodeCamp
                </li>
                <li className="mt-3 ml-3">
                  Front End Libraries Certification from freeCodeCamp
                </li>
                <li className="mt-3 ml-3">
                  Modern React with Redux from Udemy
                </li>
                <li className="mt-3 ml-3">
                  Python and Flask Bootcamp from Udemy
                </li>
                <li className="mt-3 ml-3">
                  Git Started with GitHub from Udemy
                </li>
              </ul>
            </h5>
            <h5 className="mt-3">
              This has given me experience using React, Redux, JavaScript,
              HTML5, CSS3, Bootstrap 3 and 4, jQuery, and SASS. I encourage you
              to visit the{" "}
              <u>
                <a href="#projects">Projects</a>
              </u>{" "}
              section, as well as my{" "}
              <u>
                <a href="https://github.com/jholtkort">GitHub</a>
              </u>{" "}
              profile, where you can view my projects and activities.
            </h5>
            <h5 className="mt-3">
              In my spare time, I enjoy swimming, biking, running, and spending
              time outdoors. Coming from a swimming background in high school, I
              quickly found a love for the sport of triathlon, and competed for
              the Texas Triathlon team while I was at UT Austin. I have since
              gone on to complete many triathlons and endurance events,
              including 3 half Ironmans, 1 full Ironman, and 2 marathons. I am
              also a dog lover, and have an adopted cairn terrier named Percy,
              who is my coding assistant.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
