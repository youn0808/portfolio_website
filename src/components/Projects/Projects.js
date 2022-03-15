import React from "react";
import classes from "./Projects.module.css";

import { AiOutlineSchedule } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { FaCampground } from "react-icons/fa";

import { CgWebsite } from "react-icons/cg";

const projects_data = [
  {
    id: 1,
    icon: MdFastfood,
    title: "Food ordering system",
    skills: "React • Firebase",
    details:
      "Design of an online delivery application in which items can be selected and purchased.",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "https://youn0808.github.io/food-ordering-system/",
  },
  {
    id: 2,

    icon: AiOutlineSchedule,
    title: "Course schedule website",
    skills: "HTML • CSS • JavaScript",
    details:
      "A web-based  application that allows student-specified class-priority list for creating class schedules for a term",
    github: "https://github.com/youn0808/course_registration-group-project-",
    demo: "https://youn0808.github.io/course_registration-group-project-/",
  },
  {
    id: 3,
    icon: CgWebsite,
    title: "Personal Website",
    skills: "React •  AWS",
    details: "A personal portfolio web site ",
    github: "https://github.com/youn0808/portfolio_website",
    demo: "https://github.com/youn0808/portfolio_website",
  },
  {
    id: 4,
    icon: BiCameraMovie,
    title: "Movie ticket app",
    skills: "Java • Python • SQL • Android studio ",
    details:
      "Developed a movie ticket purchasing application. The aim of the app is to allow users to be able to purchase and reserve movie tickets through an app before going to the theater.",
    github: "https://github.com/youn0808/movie_theater_app",
    demo: "video",
  },
  {
    id: 5,
    icon: BsCurrencyBitcoin,
    title: "Blockchain Data Analytics",
    skills: "Python",
    details:
      "Based on the previous transaction history analyse and predict pattern of the malicious transactions",
    github: "https://youn0808.github.io/BlockchainDataAnalytics/",
    demo: "https://github.com/youn0808/BlockchainDataAnalytics",
  },
  {
    id: 6,
    icon: FaCampground,
    title: "Camp site",
    skills: "Javascript • NodeJS",
    details:
      "A website where users can create and review campgrounds. In order to review or create a campground",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "https://github.com/youn0808/booking_camp_site",
  },
];

const Portfolio = () => {
  return (
    <section className={classes.project_section} id="projects">
      <h1>Projects</h1>

      <div className={classes.project_container}>
        {projects_data.map((data) => {
          return (
            <a href={data.demo} key={data.id} className={classes.project_item}>
              <span className={classes.icon}>
                <data.icon />
              </span>
              <div className={classes.desc}>
                <h3>
                  <b>{data.title}</b>
                </h3>
                <p>
                  <strong>{data.skills}</strong>
                </p>
                <p className={classes.detail}>{data.details}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
