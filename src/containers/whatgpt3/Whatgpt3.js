import React from "react";

import "./whatgpt3.css";
import Feature from "../features/Features";

const Whatgpt3 = () => {
  return (
    <div className="gpt section__margin" id="whpt3">
      <div className="gpt-feature">
        <Feature />
      </div>
      <div className="gpt-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default Whatgpt3;
