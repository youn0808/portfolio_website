import React from "react";
import classes from "./About.module.css";
import Me from "../../assets/me.JPG";

import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";

import CTA from "./CTA";

const About = () => {
  return (
    <section className={classes.about_section} id="about">
      <h1>About me</h1>

      <div className={classes.about__container}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={Me} alt="myimage" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaGraduationCap className={classes.about__icon} />
              <h4>Education</h4>
              <small>Bs.c in Computer Science</small>
            </article>

            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h4>Projects</h4>
              <small>10+ Completed</small>
            </article>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h4>Experience</h4>
              <small>2+ years Working</small>
            </article>
          </div>

          <p>
            I'm a versatile full stack developer with over 2 years of hands-on
            experience and a strong commitment to crafting innovative and
            user-friendly applications
            <br />
            {/* My technical expertise shines in full stack development, with a
            focus on utilizing React, Angular, and the .NET Framework to create
            robust projects. But I bring more than just tech skills to the
            table. My background also includes invaluable lessons from my time
            in the military, instilling qualities like discipline, leadership,
            and adaptability */}
            <br />
            My background not only includes technical expertise in various
            development skills such as React, Angular and C# but also
            incorporates the discipline, leadership, and adaptability instilled
            by my time in the military. This dual perspective allows me to
            approach challenges with a unique and well-rounded perspective
            <br />
            {/* <br /> Let's connect and explore how I can contribute my coding
            prowess and creative problem-solving to your team's success! */}
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
