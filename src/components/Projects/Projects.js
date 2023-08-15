import React from "react";
import classes from "./Projects.module.css";

import { AiOutlineSchedule } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";
import { GiClown } from "react-icons/gi";

import { CgWebsite } from "react-icons/cg";

const projects_data = [
  {
    id: 1,
    icon: FaTruckMoving,
    title: "Moving Company System",
    skills: "Angular • TypeScript • GraphQL",
    details:
      "A software designed to automate and optimize the entire moving process, from scheduling and dispatching to inventory management and invoicing",
  },
  {
    id: 2,
    icon: GiClown,
    title: "Joke me",
    skills: "React • Material-UI",
    details:
      "This app is designed to provide users with a fun and engaging experience by delivering a wide variety of jokes",
    demo: "https://joke-me-project.netlify.app/",
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
    icon: AiOutlineSchedule,
    title: "Course schedule website",
    skills: "HTML • CSS • JavaScript",
    details:
      "A web-based  application that allows student-specified class-priority list for creating class schedules for a term",
    github: "https://github.com/youn0808/course_registration-group-project-",
    demo: "https://youn0808.github.io/course_registration-group-project-/",
  },
  {
    id: 6,
    icon: BsCurrencyBitcoin,
    title: "Blockchain Data Analytics",
    skills: "Python",
    details:
      "Based on the previous transaction history analyse and predict pattern of the malicious transactions",
    github: "https://youn0808.github.io/BlockchainDataAnalytics/",
    demo: "https://github.com/youn0808/BlockchainDataAnalytics",
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
