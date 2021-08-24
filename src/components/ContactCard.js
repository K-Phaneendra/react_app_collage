import React from "react";
import {
  GithubIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "../assets/icons/icons";
import "../assets/styles/ContactCard.css";
import phaniImg from "../assets/images/phani-img.jpeg";

function ContactCard() {
  return (
    <div className="team-boxed">
      <div className="row people">
        <div className="col-md-6 col-lg-4 item">
          <div className="box">
            <img className="rounded-circle" src={phaniImg} alt="Phaneendra Kosanam" />
            <h3 className="name">Phaneendra Kosanam</h3>
            <p className="title">Software engineer</p>
            <p className="description">
              I am a full stack developer who is always willing to learn new
              technologies and use them to build projects and to support teams
              in building projects.
              <br />
              You can contact me through the below links
            </p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/phaneendra-kosanam-3b4756aa/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn - Phaneendra Kosanam"
              >
                <LinkedInIcon fill="" />
              </a>
              <a
                href="https://stackoverflow.com/users/12098643/phani"
                target="_blank"
                rel="noopener noreferrer"
                title="Stack overflow - Phaneendra Kosanam"
              >
                <StackOverflowIcon fill="" />
              </a>
              <a
                href="https://github.com/K-Phaneendra"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub - Phaneendra Kosanam"
              >
                <GithubIcon fill="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
