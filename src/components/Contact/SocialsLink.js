import React from "react";
import classes from "./Contact.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const SocialsLink = () => {
  return (
    <div className={classes.socials}>
      <a
        href="https://www.linkedin.com/in/seung0909/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/youn0808" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default SocialsLink;
