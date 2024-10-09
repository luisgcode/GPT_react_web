import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is gpt3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="Company-logo" />
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign In</p>
        <button>Sign up</button>
      </div>

      {/* // ****************  Mobile menu from here   *****************/}
      <div className="navbar-mobile">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu2Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-mobile-container scale-up-center">
            <div className="navbar-links-container-mobile">
              <Menu />
              <div className="navbar-sign-mobile">
                <p>Sign In</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
