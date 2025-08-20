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
    companyName: "Nirix",
    location: "Canada Remote",
    position: "Full Stack Software Developer",
    duration: "Nov 2023 - July 2024",
    details: [
      "Developed and maintained enterprise-level web applications using Angular, creating responsive and intuitive user interfaces that improved user engagement and workflow efficiency",
      "Built cross-platform mobile applications with Flutter, ensuring consistent performance and native-like user experience across iOS and Android platforms",
      "Designed and implemented robust backend solutions using .NET Framework/Core and SQL Server, developing RESTful APIs and database structures that supported critical business operations",
      "Participated in architectural design discussions, recommending scalable and maintainable software solutions to meet evolving business needs",
      "Integrated Firebase service to enhance application scalability, performance, and monitoring",
    ],
  },

  {
    id: 1.2,
    icon: FaTruckMoving,
    companyName: "Unionware",
    location: "Winnipeg, MB",
    position: "Full Stack Software Developer",
    duration: "Nov 2023 - July 2024",
    details: [
      "Wrote and tested T-SQL code, including stored procedures, triggers, functions, and other complex queries.",
      "Configured Enterprise-level software through database entries",
      "Enhanced Enterprise software written in VB.NET",
      "Conducted end-to-end testing of both frontend and backend components to identify and resolve any issues or bugs using Cypress",
      "Enhanced web products written in ASP.NET, JavaScript, and CSS",
      "Utilized Power BI to create dynamic dashboards and visualizations, transforming complex datasets into actionable business insights",
      "Collaborated with the Solutions Architect, Business Analyst, and Quality Assurance Analyst to design scalable software solutions, refine requirements.",
    ],
  },
  {
    id: 2,
    icon: FaTruckMoving,
    companyName: "KarveIT",
    location: "Winnipeg, MB",
    position: "Full Stack Web Developer",
    duration: "April 2022 - Sep 2023",
    details: [
      "Developed and maintained software applications for managing booking systems, assets, employees, and other functions for moving companies",
      "Implemented navigation history and bookmark features to track the most recently visited pages within the application",
      "Made the application fully responsive by adjusting all necessary pages and components for mobile and tablet devices, occasionally creating custom mobile components when our UI framework's components could not be adapted",
      "Conducted end-to-end testing of both frontend and backend components to identify and resolve any issues or bugs using Cypress",
      "Skills: Angular, TypeScript, GraphQL, Neo4j, Express.js, PrimeNG",
    ],
  },
  {
    id: 3,
    icon: FaTruckMoving,
    companyName: "LeedWay Mission",
    location: "Winnipeg, MB",
    position: "Software Developer (Volunteer)",
    duration: "Feb 2020 - April 2022",
    details: [
      "Mentored and provided training to new immigrants, children, and underprivileged individuals in local communities, empowering them with programming skill",
      "Worked on cross-browser compatibility issues and fixed bugs pertaining to various browsers",
      "Skills: Java, Javascript",
    ],
  },

  {
    id: 4,
    icon: FaTruckMoving,
    companyName: "Republic of Korea Marine Corps ",
    location: "South Korea",
    position: "Marine",
    duration: "Jan 2016 - Aug 2017",
    details: [
      "Successfully completed Ranger Training and Airborne Training, demonstrating exceptional commitment and determination",
      "Led a highly skilled 6-man team in challenging combat missions, showcasing strong leadership abilities and teamwork",
      "Imposed and adhered to strict discipline and schedules, enhancing personal discipline and time management skills",
      "Collaborated seamlessly with various other military units, fostering inter-unit teamwork and coordination.",
      "Skills: Leadership, Teamwork, Discipline, Time management ",
    ],
  },

  // {
  //   id: 3,
  //   icon: FaTruckMoving,
  //   companyName: "Desert Island Lab",
  //   location: "Seoul, Korea",
  //   position: "Project Manager",
  //   duration: "April 2017 - Sep 2017",
  //   details: [
  //     "Analyzed requirements and contributed to website development",
  //     "Collaborated with local partners for bookings and issue resolution",
  //     "Handled customer inquiries, complaints, and feedback",
  //     "Skills: Conflict Resolution, Communication, Problem-Solving",
  //   ],
  // },
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
