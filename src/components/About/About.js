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
            I am a dynamic Full Stack Developer with over 3 years of experience
            designing and delivering innovative, scalable, and user-friendly
            applications. My technical expertise spans React, Angular, ASP.NET,
            the .NET Framework, and Flutter, allowing me to build both
            responsive web solutions and high-performance mobile apps.
            <br />
            <br />

            
            Currently at Nirix, I contribute to advancing digital workspace
            solutions by implementing modern features, optimizing complex T-SQL
            queries, and enhancing enterprise software efficiency. I am
            dedicated to delivering clean, maintainable code that drives both
            performance and long-term scalability. My military background has
            instilled in me discipline, leadership, and adaptability—qualities
            that help me approach technical challenges strategically,
            collaborate effectively, and deliver results in fast-paced
            environments.
            <br />
          </p>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
