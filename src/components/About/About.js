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
              <small>10+ Completed</small>
            </article>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
          </div>

          <p>
            During my post-secondary studies, I become porficient in a variety
            of language including Java, Python, JavaScript, React, NodeJS,
            postgreSQL. I’m motivated to grow and through self-directed learning
            continuously strive to expand my capabilities in front and back-end
            development.had the privilege of serving as leader of a 6-person
            team through various missions for 2 years. This role has allowed me
            to foster several attributes such as creativity, problem-solving,
            communication skills, detail-oriented, and in particular, a notable
            aptitude for performing under duress, whether workload or time
            related.
          </p>

          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
