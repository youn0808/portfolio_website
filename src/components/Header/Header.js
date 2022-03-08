import React from "react";
import classes from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me.JPG";

import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className={`${classes.header__container} container`}>
        <h5>Hello I'm</h5>
        <h1>Seung</h1>
        <h5 className="text-light">Web developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={classes.me}>
          <img src={ME} alt="me" />
        </div>
        <a hrf="#contact" className={classes["scroll__down"]}>
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
