import React from "react";
import "./Social.css";

function Social({ media }) {
  return (
    <div ref={media} className="Social">
      <ul>
        <li id="0">
          <a
            href="https://github.com/IslamMohamed95"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li id="1">
          <a
            href="https://www.linkedin.com/in/islammohamed8907/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <p>&copy;2023 Islam-Mohamed.com</p>
    </div>
  );
}

export default Social;
