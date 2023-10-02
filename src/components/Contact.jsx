import React, { useState } from "react";
import msg from "../assets/comment.png"
import call from "../assets/phone-call.png"
import "./contact.css";


const Contact = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here, you can implement your logic to send the form data to a server or handle it as needed
      // For now, we'll just set submitted to true
      setSubmitted(true);
    };


  return (
    <>
      <div className="contact-parent-container">
        <div className="container contact-heading">
          <div className="line"></div>
          <h2>Contact US</h2>
        </div>
        <div className="contact-box">
        {submitted ? (
        <p>Thank you for your message! We'll be in touch soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <h5>Email</h5>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            {/* <label htmlFor="message">Message:</label> */}
            <h5>Message</h5>
            <textarea
              id="message"
              value={message}
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
              className="contact-message"
            />
          </div>
          <button type="submit" className="submit-btn">Send</button>
        </form>
      )}
      <div className="btn-container">
        <button><img src={msg} alt="" />Message</button>
        <button><img src={call} alt="" />Get a call back</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
