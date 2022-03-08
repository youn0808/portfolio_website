import React from "react";
import classes from "./Nav.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className={classes.nav}>
      <a
        href="#"
        className={activeNav === "#" ? classes.active : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "about" ? classes.active : ""}
        onClick={() => {
          setActiveNav("about");
        }}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? classes.active : ""}
        onClick={() => {
          setActiveNav("experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "services" ? classes.active : ""}
        onClick={() => {
          setActiveNav("services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "contact" ? classes.active : ""}
        onClick={() => {
          setActiveNav("contact");
        }}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
