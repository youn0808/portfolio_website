import React from "react";
import classes from "./Home.module.css";

import ME from "../../../assets/me.JPG";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div id="home" className={classes.home}>
      <div className={classes.text_box}>
        <span className={classes.subheading}>Hey I'm</span>
        <h1>Seunghwan Youn </h1>
        <div className={classes.typewrite}>
          <span>I like </span>
          <h4>
            <Typewriter
              options={{
                strings: [
                  "Problem Solving.",
                  "Coding.",
                  "Software Development.",
                ],
                autoStart: true,
                loop: true,
                delay: 110,
                pauseFor: 1200,
                deleteSpeed: 100,
              }}
            />
          </h4>
        </div>

        {/* <h5 className="text-light">Web developer</h5> */}
      </div>

      <div className={classes.scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* <a hrf="#contact" className={classes["scroll__down"]}>
        Scroll down
      </a> */}
    </div>
  );
};

export default Home;
