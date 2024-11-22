import React from "react";
import "./Intro.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Pic from "../../../Assistance/Pic.webp";
import CV from "../../../Assistance/CV.docx";

function Intro() {
  return (
    <React.Fragment>
      <div className="Intro">
        <div></div>
        <LazyLoadImage src={Pic} alt="Img" />
        <div></div>
      </div>
      <div className="IntroContent">
        My name is Islam Mohamed, I'm a full-stack developer (MongoDB,
        ExpressJS, ReactJS, NodeJS) based in Dubai, I have developed many types
        of web application. I'm passionate about cutting-edg, pixel-perfect,
        beautiful interfaces, Friendly user apps, enhance applications
        performance, simple and creative designs.
      </div>
      <div className="CV">
        <button>
          <a href={CV} download="Resume" rel="noreferrer">
            CV
          </a>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Intro;
