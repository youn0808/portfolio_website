import React from "react";
import classes from "./Projects.module.css";

import { AiOutlineSchedule } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { SiYourtraveldottv } from "react-icons/si";
import { GiClown } from "react-icons/gi";

import { CgWebsite } from "react-icons/cg";

const projects_data = [
  {
    id: 1,
    icon: SiYourtraveldottv,
    title: "Trip guide AI ChatBot",
    skills: "React • Pyhton • FastAPI",
    details:
      "AI-powered voice chat travel advisor application that assists users in planning their trips through voice interactions.",
    demo: "https://explor-mentor-ai-bot.netlify.app/",
  },
  {
    id: 2,
    icon: GiClown,
    title: "Joke me website",
    skills: "React • Material-UI",
    details:
      "This app is designed to provide users with a fun and engaging experience by delivering a wide variety of jokes",
    demo: "https://joke-me-project.netlify.app/",
  },
  {
    id: 3,
    icon: BiRestaurant,
    title: "Resturant demo app",
    skills: "React • Next • tailwind-css ",
    details:
      "Developed a restaurant website built with the React and Next.js framework",
    demo: "https://bistro-demo-app.netlify.app/",
  },
  {
    id: 4,
    icon: CgWebsite,
    title: "Personal Website",
    skills: "React •  AWS",
    details: "A personal portfolio web site ",
    github: "https://github.com/youn0808/portfolio_website",
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
