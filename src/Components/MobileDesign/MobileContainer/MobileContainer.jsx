import React, { useRef } from "react";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Email from "../Email/Email";
import Social from "../Social/Social";

function MobileContainer() {
  const service = useRef(null);
  const project = useRef(null);
  const email = useRef(null);
  const media = useRef(null);

  return (
    <div className="MobContainer">
      <Header service={service} project={project} email={email} media={media} />
      <Intro />
      <Services service={service} />
      <Projects project={project} />
      <Email email={email} />
      <Social media={media} />
    </div>
  );
}

export default MobileContainer;
