import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import "../../assets/styles/Contact.css";
import { SEND_CONTACT_EMAIL } from "../../redux/dispatchActions/Contact";

const initialFormValues = {
  name: "",
  email: "",
  country: "",
  message: "",
};

function Contact(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const submitForm = () => {
    const stringifiedValues = JSON.stringify(formValues);
    props.SEND_CONTACT_EMAIL(formValues);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <h3>
        On submitting this form, you will receive a thank you email from <b>gokusaiyan.z@outlook.com</b>
      </h3>
      <br />

      <div className="container" id="contact-me">
        <form>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your first name.."
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            value={formValues.name}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your e-mail here.."
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            value={formValues.email}
          />

          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) =>
              setFormValues({ ...formValues, country: e.target.value })
            }
            value={formValues.country}
          >
            <option value="">-- Select country --</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            style={{ height: "200px" }}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            value={formValues.message}
          ></textarea>
        </form>

        <div className="text-center pt-3">
          <Button type="primary" onClick={submitForm}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // SEND AN EMAIL WHEN A USER CLICKS ON SUBMIT
    SEND_CONTACT_EMAIL: (body) => dispatch(SEND_CONTACT_EMAIL(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
