import React from "react";
import CV from "../../Assistance/CV.docx";
import "./Welcome.css";

function Welcome({ target }) {
  return (
    <div className={target === "intro" ? "Welcome hideWelcome" : "Welcome"}>
      <svg
        stroke="rgb(199, 199, 199)"
        strokeWidth="0.5"
        className={target ? "text-line" : ""}
      >
        <text x="0px" dominantBaseline="bottom" textAnchor="left" y="80%">
          Welcome.
        </text>
      </svg>
      <p data-aos="zoom-in">
        I'm Islam Mohamed a passionate Full Stack Developer with over 4 years of
        hands-on experience building dynamic, scalable web applications using
        the MERN stack. With a background in Communication Engineering (Class of
        2018), he blends strong technical expertise with a problem-solving
        mindset and a commitment to clean, efficient code. At 30, Islam brings
        both maturity and innovation, delivering modern digital solutions that
        drive real impact.
      </p>
      <button>
        <a
          className="CV"
          data-aos="fade-right"
          href={CV}
          download="Resume"
          rel="noreferrer"
        >
          Download CV
        </a>
      </button>
    </div>
  );
}

export default Welcome;
