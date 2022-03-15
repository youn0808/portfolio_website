import React from "react";
import classes from "./About.module.css";
import Me from "../../assets/me.JPG";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
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
              <h5>Education</h5>
              <small>Bs.c in Computer Science</small>
            </article>

            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>6+ months Working</small>
            </article>
          </div>

          <p>
            From couple of group projects while studying at UofM, I have
            strongly understood not only CSS, JavaScript, NodeJS, MongoDB but
            also using agile methodologies and Git to build and manage the
            project. And I have invested much of my time developing front and
            back end knowledges and skills even now. I am willing to learn new
            technology and skills and become a part of team more than just as an
            intern. In South Korea, I discharged from my military services
            obligations where I was an infantry marine as squad leader for two
            years. In this role I led a cohort of 6 in combat missions.
          </p>

          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
