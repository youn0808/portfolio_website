import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <section className={classes.footer}>
        {/* <a href="#" className={classes.footer__logo}>
          ATOR
        </a> */}
        <div className={classes.footer_container}>
          <ul className={classes.permalinks}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={classes.footer__copyright}>
          <small>&copy; All rights reserved</small>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
