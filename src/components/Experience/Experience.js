import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import classes from "./Experience.module.css";
import { GiClown } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

import { AiOutlineSchedule } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";

import HTML_IMG from "../../assets/skills/html.png";
import CSS_IMG from "../../assets/skills/css.png";
import Java_IMG from "../../assets/skills/javascript.png";
import Bootstrap_IMG from "../../assets/skills/bootstrap.png";
import React_IMG from "../../assets/skills/react.png";
import NodeJS_IMG from "../../assets/skills/node.png";

import cplusplus_IMG from "../../assets/skills/cplusplus.png";
import firebase_IMG from "../../assets/skills/firebase.png";
import java_IMG from "../../assets/skills/java.png";

import NextJS_IMG from "../../assets/skills/nextjs.png";
import python_IMG from "../../assets/skills/python.png";
import mysql_IMG from "../../assets/skills/mysql.png";
import mongo_IMG from "../../assets/skills/mongo.png";

import angular_IMG from "../../assets/skills/angular.png";
import typeScript_IMG from "../../assets/skills/typescript.png";
import cypress_IMG from "../../assets/skills/cypress.png";
import neo4j_IMG from "../../assets/skills/neo4j.png";
import graphql_IMG from "../../assets/skills/graphql.png";

import linux_IMG from "../../assets/skills/linux.png";

const experience_data = [
  {
    id: 1,
    icon: FaTruckMoving,
    companyName: "Moving Company System",
    location: "Winnipeg, MB",
    position: "Full Stack Web Developer",
    duration: "April 2022 - May 2023",
    details: [
      "Developed and maintained software for moving company operations",
      "Added navigation history and bookmarks to track recent pages",
      "Ensured mobile and tablet responsiveness, creating custom components when necessary.",
      "Conducted thorough testing using Cypress for bug resolution.",
      "Skills: Angular, TypeScript, GraphQL, Neo4j, Express.js, PrimeNG",
    ],
  },
  {
    id: 2,
    icon: FaTruckMoving,
    companyName: "LeedWay Mission",
    location: "Winnipeg, MB",
    position: "Software Developer",
    duration: "Nov 2021 - Mar 2022",
    details: [
      "Involved in full SDLC, understanding Test-Driven Development and Agile/Scrum",
      "Worked on cross-browser compatibility issues and fixed bugs pertaining to various browsers",
      "Educated programming to immigrants and children in local communities.",
      "Skills: React, Python, C#, .NET framework",
    ],
  },
  {
    id: 3,
    icon: FaTruckMoving,
    companyName: "Desert Island Lab",
    location: "Seoul, Korea",
    position: "Project Manager",
    duration: "April 2017 - Sep 2017",
    details: [
      "Analyzed requirements and contributed to website development",
      "Collaborated with local partners for bookings and issue resolution",
      "Handled customer inquiries, complaints, and feedback",
      "Skills: Conflict Resolution, Communication, Problem-Solving",
    ],
  },
  {
    id: 4,
    icon: FaTruckMoving,
    companyName: "Republic of Korea Marine Corps ",
    location: "Korea",
    position: "Marine",
    duration: "Jan 2016 - April 2017",
    details: [
      "Ranger Training and Airborne Training",
      "Lead a 6-man team in combat missions",
      "Handled customer inquiries, complaints, and feedback",
      "Skills: Leadership, Teamwork, Discipline, Time management ",
    ],
  },
];
const Experience = () => {
  return (
    <section className={classes.experience_section} id="experience">
      <h1>Work Experience</h1>

      <div className={`${classes.experience__container}`}>
        {experience_data.map((data) => {
          return (
            <div className={classes.container}>
              <span className={classes.span_container}>
                <span className={classes.title}>{data.companyName}</span>
                <span style={{ fontSize: "0.75rem" }}>{data.duration}</span>
              </span>
              <div style={{ marginBottom: "1rem", fontSize: "0.85rem" }}>
                {data.position} , {data.location}
              </div>
              {/* <p className={classes.duration}>{data.duration}</p> */}
              {/* <div className="">{data.location}</div> */}
              {data.details.map((role) => {
                return (
                  // <p
                  //   style={{
                  //     marginLeft: "8px",
                  //     display: "flex",
                  //     alignItems: "center",
                  //   }}
                  // >
                  <p style={{ marginLeft: "8px" }}>● {role}</p>
                );
              })}
              {/* <p className="">Skills:{data.skills}</p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
