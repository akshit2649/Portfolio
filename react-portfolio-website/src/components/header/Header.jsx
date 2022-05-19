import React from "react";
import CTA from "./CTA";
import classes from "./Header.module.css";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Akshit Thakur</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
