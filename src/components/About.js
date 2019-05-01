import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-10 about-text">
          <h1>About Me:</h1>
          <h5 className="mt-3">
            I was raised in San Angelo, TX, and have a Bachelor of Science in
            Mechanical Engineering and a Business Foundations Certificate from
            The University of Texas at Austin.
          </h5>
          <h5 className="mt-3">
            While working as a Cost Estimator for two and a half years at AECOM,
            I found an interest in software development and decided that I
            wanted to pursue a career as a software developer. Since that time,
            I have earned the Responsive Web Design Certification, JavaScript
            Algorithms and Data Structures Certification, and Front End
            Libraries Certification from freeCodeCamp; completed the Modern
            React with Redux, Python and Flask Bootcamp, and Git Started with
            GitHub courses on Udemy.
          </h5>
          <h5 className="mt-3">
            This has given me experience using React, Redux, JavaScript, HTML5,
            CSS3, Bootstrap 3 and 4, and SASS. I encourage you to visit the{" "}
            <a href="/projects">Projects</a> tab, as well as, my{" "}
            <a href="https://github.com/jholtkort">GitHub</a> profile where I
            have been pushing my projects and activities to.
          </h5>
          <h5 className="mt-3">
            In my spare time I enjoy swimming, biking, running, and spending
            time outdoors. Coming from a swimming background in high school, I
            quickly found a love for the sport of triathlon, and competed for
            the Texas Triathlon team while I was at UT Austin. I have since gone
            on to complete many triathlons and endurance events, including 3
            half Ironmans, 1 full Ironman, and 2 marathons.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
