import "./feature.css";

import React from "react";

const Feature = ({ title, text }) => {
  return (
    <div className="features-container">
      <div className="features-container-title">
        <h1>{title}</h1>
      </div>
      <div className="features-container-text">
        <p> {text}</p>
      </div>
    </div>
  );
};

export default Feature;
