import React from "react";
import axios from 'axios';
import { useState } from "react/cjs/react.development";

const RequestForm = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  
 
  const Send = async () => {
  }



  return (
    <div className="appointment-form" id="appointment-form">
      <h6>Schedule a visit</h6>
      <form id="contact">
        {/* IF MAIL SENDING UNSUCCESSFULL */}
        <span className="error">
          E-mail must be valid and message must be longer than 1 character.
        </span>
        <div className="input-box">
          <input id="name" type="text" name="name" placeholder="Name" 
          value={values.name} onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={values.email} onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={values.subject} onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={values.message} onChange={handleChange}
          />
        </div>
        {/* IF MAIL SENT SUCCESSFULLY */}
        <span className="success">
          Your message has been sent successfully.
        </span>
        <div className="input-box">
          <input
            className="button"
            id="submit"
            type="button"
            defaultValue="Send Message"
            onClick={(e)=>Send()}
          />
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
