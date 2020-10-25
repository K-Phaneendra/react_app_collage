import React from 'react';
import { FaGithub, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import '../assets/styles/Footer.css';

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

      <h5>{'Built using React, Redux, Bootstrap and many more with NodeJS and Python running on the backend'}</h5>

      <div className="links">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub repository"
        >
          <FaGithub fill="" />
        </a>

        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="React JS"
        >
          <FaReact fill="#61DAFB" />
        </a>

        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
          title="Node JS"
        >
          <FaNodeJs fill="#43853d" />
        </a>

        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Python"
        >
          <FaPython fill="" />
        </a>

      </div>
    </footer>
  );
}

export default React.memo(Footer);
