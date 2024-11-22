import React, { useState, useEffect } from "react";
import "./Menu.css";

function Menu({ target, setTarget }) {
  let text = [
    "Prefabricated Web App",
    "MoCha Social Media App",
    "Todo List App",
    "Smart Calculator App",
  ];
  const [ele, setEle] = useState([]);
  useEffect(() => {
    setEle(document.querySelectorAll(".op"));
  }, []);

  const handleEff = (index, e) => {
    if (index === 0) {
      document
        .querySelector(":root")
        .style.setProperty("--page-color1", "#9F025E");
      document
        .querySelector(":root")
        .style.setProperty("--page-color2", "#F9C929");
    } else if (index === 1) {
      document
        .querySelector(":root")
        .style.setProperty("--page-color1", "#A3C9E2");
      document
        .querySelector(":root")
        .style.setProperty("--page-color2", "#9618F7");
    } else if (index === 2) {
      document
        .querySelector(":root")
        .style.setProperty("--page-color1", "#0C7BB3");
      document
        .querySelector(":root")
        .style.setProperty("--page-color2", "#F2BAE8");
    } else if (index === 3) {
      document
        .querySelector(":root")
        .style.setProperty("--page-color1", "#DAFEA4");
      document
        .querySelector(":root")
        .style.setProperty("--page-color2", "#F254A8");
    }
    ele.forEach((e, i) => {
      if (target === "intro") {
        e.classList.remove("textEffect");
        e.style.setProperty("--width", "50%");
      } else if (i === index) {
        e.classList.add("textEffect");
        e.style.setProperty("--width", "70%");
        e.style.setProperty(
          "--color",
          "linear-gradient(to right, var(--page-color1), var(--page-color2))"
        );
      } else {
        e.classList.remove("textEffect");
        e.style.setProperty(
          "--color",
          "linear-gradient(to left, var(--page-color1), var(--page-color2))"
        );
        e.style.setProperty("--width", "50%");
      }
    });
    document.querySelectorAll(".project").forEach((p, i) => {
      if (i === index) {
        p.classList.add("show");
      } else {
        p.classList.remove("show");
      }
    });
  };
  return (
    <div className="Menu" data-aos="fade-left">
      <h1 className="d-lg-block">Projects</h1>
      <div className="list">
        <ul>
          {text.map((t, i) => {
            return (
              <li
                key={i}
                id={i}
                className="op"
                onClick={(e) => {
                  handleEff(i, e);
                  setTarget(e.target.innerHTML);
                }}
              >
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
