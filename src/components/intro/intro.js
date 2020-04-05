import React from "react";


function Intro() {
  return (
    <div>
      <div className="photo-bg valign-wrapper">
        <div className="container row dark-bg">
          <div className="col s12 m12 center">
            <img
              src="assets/images/Keeley_Hugo-2.jpg"
              alt="Keeley Byerly"
              className="responsive-img circle center"
            //   style="padding: auto; margin: auto; width: 200px;"
            />
            <h4>About Me</h4>
            <p>
              I'm a digital marketer with 5 years of experience focusing on
              email and landing page creation, testing, and analysis. I'm
              excited to expand my skill set and pursue a more technical role.
              In my free time, I enjoy hiking, kayaking, and knitting/crochet.
            </p>
            <p>
              <a href="https://github.com/keeleybb" target="_blank">Github</a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/keeley-blakley-byerly-2a529553/"
                target="_blank"
              >LinkedIn</a>{" "}
              |{" "}
              <a href="assets/images/kbyerly_02_2020.pdf" target="_blank">Resume</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container row">
        <div className="col s12 center">
          <i className="large material-icons teal-text">expand_more</i>
        </div>
      </div>
    </div>
  );
}

export default Intro;
