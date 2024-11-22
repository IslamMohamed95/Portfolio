import React, { useMemo, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Mail.css";

function Mail({ activeEmail }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    document.querySelectorAll(".inp").forEach((inp) => {
      if (inp.value === "") {
      } else {
        emailjs
          .sendForm(
            "service_9816hmf",
            "template_awpo31k",
            form.current,
            "PlTHQyg_-lTMu4Q1y"
          )
          .then(() => {
            e.target.reset();
          });
      }
    });
  };
  return (
    <div className={activeEmail ? "Mail showMail" : "Mail"}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="inp" id="name" type="text" name="from_name" />
        <label>Email</label>
        <input className="inp" type="email" name="from_email" />
        <label>Message</label>
        <textarea className="inp" name="message" />
        <div>
          <input type="submit" value="Send" />
          <p>Changed your mind! 😔</p>
        </div>
      </form>
      <div>
        <h2>
          Get <span>In Touch !</span>
        </h2>
        <p>👋</p>
      </div>
    </div>
  );
}

export default Mail;
