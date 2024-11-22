import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

function Email({ email }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9816hmf",
        "template_awpo31k",
        form.current,
        "PlTHQyg_-lTMu4Q1y"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div ref={email} className="Email">
      <h1>Get In Touch</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input id="name" type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Email;
