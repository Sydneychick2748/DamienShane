import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = (e) => {
  const form = useRef();
  const YOUR_PUBLIC_KEY = "OI-hkufm0aTZEzXQd";
  const YOUR_SERVICE_ID = "service_haxhm6i";
  
  const YOUR_TEMPLATE_ID = "template_80lpey8";

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
  .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
  .then(
    (result) => {
      console.log("Email sent successfully:", result);
      // You can show a success message to the user or perform any other actions here
    },
    (error) => {
      console.error("Email could not be sent. Error:", error);
      // You can show an error message to the user or perform error handling here
    }
  );

  };

  return (
    <div className="login-box">
      <h1>Get the Party Started!</h1>
      <form ref={form} onSubmit={sendEmail}>
        
          <div className="user-box">
  <input type="text" name="name" required />
  <label>Name</label>
</div>
<div className="user-box">
  <input type="email" name="email" required />
  <label>Email</label>
</div>
<div className="user-box">
  <input type="text" name="message" required />
  <label>Message</label>
</div>
        <input type="submit" value="Send" className="hidden-input" />
        <a href="#" onClick={sendEmail} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Lets Connect
        </a>
      </form>
    </div>
  );
};

export default Contact;
