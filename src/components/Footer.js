import React from "react";
import {
  FlaskIcon,
  GithubIcon,
  LinkedInIcon,
  NodeJsIcon,
  OpenCVSVG,
  PythonIcon,
  ReactJsIcon,
} from "../assets/icons/icons";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="link">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          title={process.env.REACT_APP_NAME}
        >
          {process.env.REACT_APP_NAME}
        </a>
      </div>

      <section>
        <h5>
          Built using React, Redux, Bootstrap and many more node modules with
          NodeJS and Python running on the backend
        </h5>

        <div className="links">
          <a
            href="https://github.com/K-Phaneendra"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub - Phaneendra Kosanam"
          >
            <GithubIcon fill="" />
          </a>

          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="React JS"
          >
            <ReactJsIcon fill="#61DAFB" />
          </a>

          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            title="Node JS"
          >
            <NodeJsIcon fill="#43853d" />
          </a>

          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Python"
          >
            <PythonIcon fill="" />
          </a>

          <a
            href="https://flask.palletsprojects.com/en/1.1.x/"
            target="_blank"
            rel="noopener noreferrer"
            title="Flask"
          >
            <FlaskIcon fill="" title="Flask" />
          </a>

          <a
            href="https://opencv.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open computer vision - OpenCV"
          >
            <img
              src={OpenCVSVG}
              height="20rem"
              alt="Open CV"
              className="footer-tech-icon"
            />
          </a>
        </div>
      </section>
      <section className="d-flex">
        <h3 className="l-h-2">Contact me</h3>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/phaneendra-kosanam-3b4756aa/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn - Phaneendra Kosanam"
          >
            <LinkedInIcon fill="" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default React.memo(Footer);
