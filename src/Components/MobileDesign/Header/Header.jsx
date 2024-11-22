import React, { useEffect, useState } from "react";
import "./Header.css";

function Header({ service, project, email, media }) {
  const [list, setList] = useState();
  const handleScroll = (ele) => {
    setList(false);
    ele.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (list === undefined) {
      setList(false);
    }
  }, [list]);

  return (
    <div className="MobHeader">
      <div className="Menu" onClick={() => setList(!list)}>
        <div className={list ? "effect1" : ""}></div>
        <div></div>
        <div className={list ? "effect3" : ""}></div>
      </div>
      <div className={list ? "MobList activeList" : "MobList"}>
        <ul>
          <li
            className={list ? "liEff1" : ""}
            onClick={() => handleScroll(service)}
          >
            Services
          </li>
          <li
            className={list ? "liEff2" : ""}
            onClick={() => handleScroll(project)}
          >
            Projects
          </li>
          <li
            className={list ? "liEff3" : ""}
            onClick={() => handleScroll(email)}
          >
            Get In Touch
          </li>
          <li
            className={list ? "liEff4" : ""}
            onClick={() => handleScroll(media)}
          >
            Social
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
