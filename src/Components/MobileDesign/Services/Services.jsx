import React from "react";
import "./Services.css";

function Services({ service }) {
  return (
    <div ref={service} className="Services">
      <h1>Services</h1>
      <div className="container">
        <div className="one">
          <div></div>
          <div></div>
        </div>
        <div className="content">
          <div>Develope</div>
          <div>SEO</div>
          <div>Test</div>
          <div>Performance</div>
        </div>
        <div className="two">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
