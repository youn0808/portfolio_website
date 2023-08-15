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
            Full Stack  Developer with a Bachelor's degree in Computer Science from the University of Manitoba.
            I have a diverse range of experiences that have shaped me both personally and professionally.
            Before I dived into tech industry I honerably change to serve military services for 2 years and from that experience 
            I developed essential skills such as leadership, teamwork, discipline, and time management.
            After graduated school, I was given the opportunity to work as a full stack developer from KarveIT. 
            Our team developed a moving software designed to automate and optimize the entire moving process, from scheduling and dispatching to inventory management and invoicing.
            I'm constantly eager to expand my knowledge and stay up-to-date with the latest industry trends.
          </p>
    
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;
