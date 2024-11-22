import React, { useState } from "react";
import "./Frame.css";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Menu from "../Menu/Menu";
import Projects from "../Projects/Projects";
import Mail from "../Mail/Mail";

function Frame() {
  let [target, setTarget] = useState("intro");
  const [activeEmail, setActiveEmail] = useState(false);

  return (
    <div className="Frame">
      <div className="frameOne">
        <div></div>
        <div></div>
      </div>
      <Header setTarget={setTarget} setActiveEmail={setActiveEmail} />
      <div className="Container">
        <div className={activeEmail ? "left moveLeft" : "left"}>
          <Welcome target={target} />
          <Projects target={target} />
        </div>
        <div className={activeEmail ? "right moveMenu" : "right"}>
          <Menu target={target} setTarget={setTarget} />
        </div>
        <Mail activeEmail={activeEmail} />
      </div>
      <div className="frameTwo">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Frame;
