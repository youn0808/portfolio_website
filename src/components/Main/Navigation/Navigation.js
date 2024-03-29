import React from "react";
import classes from "./Navigation.module.css";
import Resume from "../../../assets/Resume.pdf";
const Navigation = () => {
  return (
    <nav className={classes.navbar}>
      <h1>
        <a href="/">Seung Hwan</a>
      </h1>

      <ul>
        <li>
          <a className={classes.selected} href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href={Resume} download className="btn btn-primary">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
