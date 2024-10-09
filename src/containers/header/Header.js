import React from "react";

import "./header.css";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <div className="header section__padding " id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-content-input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={people} alt="People image" />
        </div>
      </div>
    </div>
  );
};

export default Header;