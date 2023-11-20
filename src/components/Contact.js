import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = (e) => {
  const form = useRef();
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const YOUR_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //Add state variables for message visibility
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setSuccessMessage("Email sent successfully");
          setName("");
          setEmail("");
          setMessage("");
          // Clear success message after a set time (e.g., 5 seconds)
          setTimeout(() => {
            setSuccessMessage(null);
            setIsSuccessVisible(false);
          }, 5000);
          // You can show a success message to the user or perform any other actions here
        },
        (error) => {
          console.error("Email could not be sent. Error:", error);
          setErrorMessage("Email could not be sent. Error: " + error);
          setName("");
          setEmail("");
          setMessage("");
          // Clear success message after a set time (e.g., 5 seconds)
          setTimeout(() => {
            setSuccessMessage(null);
            setIsSuccessVisible(false);
          }, 5000);
          // You can show an error message to the user or perform error handling here
        }
      );
  };

  return (
    <div className="login-box">
      <h1>BOOKINGS</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="user-box">
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <label>Message</label>
        </div>
        <input type="submit" value="Send" className="hidden-input" />
        <a href="#" onClick={sendEmail}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Lets Connect
        </a>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {isSuccessVisible && (
          <div className="success-message">{successMessage}</div>
        )}
        {isErrorVisible && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Contact;
