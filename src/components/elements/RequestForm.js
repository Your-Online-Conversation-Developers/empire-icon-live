import React from "react";
import { useState } from "react/cjs/react.development";

const RequestForm = () => {
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
          />
        </div>

        <div className="input-box">
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        
        <div className="input-box">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
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
          />
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
