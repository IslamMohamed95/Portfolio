import React from "react";
import "./Header.css";
import Footer from "../Footer/Footer";

function Header({ setTarget, setActiveEmail }) {
  return (
    <div className="Header">
      <div
        className="logo"
        onClick={async () => {
          document
            .querySelector(":root")
            .style.setProperty("--page-color1", "rgb(103, 71, 189)");
          document
            .querySelector(":root")
            .style.setProperty("--page-color2", "rgb(166, 185, 79)");
          await setTarget("intro");
          setActiveEmail(false);
        }}
      >
        Is<span>l</span>
        <span>a</span>m
      </div>
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
        <li id="2" onClick={() => setActiveEmail(true)}>
          <i className="fa-solid fa-paper-plane"></i>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default Header;
