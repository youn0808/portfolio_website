import React from "react";
import classes from "./About.module.css";
import Me from "../../assets/me.JPG";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes.about__me_image}>
            <img src={Me} alt="myimage" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>6+ months Working</small>
            </article>

            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Projects</h5>
              <small>20+ Completed</small>
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
            years. In this role I led a cohort of 6 in combat missions. It
            allowed me to develop meaningful teamwork skills, memorization, and
            patience, particularly when dealing with difficult situations,
            skills that I would apply to this job and do the best that I can.
          </p>
          <a hrf="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
