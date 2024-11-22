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
        My name is Islam Mohamed, I'm a full-stack developer (MongoDB,
        ExpressJS, ReactJS, NodeJS) based in Dubai, I have developed many types
        of web application.
        <br />
        I'm passionate about cutting-edg, pixel-perfect, beautiful interfaces,
        Friendly user apps, enhance applications performance, simple and
        creative designs.
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
