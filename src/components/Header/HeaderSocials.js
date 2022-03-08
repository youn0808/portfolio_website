import React from "react";
import classes from "./Header.module.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className={classes["header__socials"]}>
      <a
        href="https://www.linkedin.com/in/seunghwan-youn-9303/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/youn0808" target="_blank">
        <BsGithub />
      </a>
      <a href="" target="_blank"></a>
    </div>
  );
};

export default HeaderSocials;
