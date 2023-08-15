import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import classes from "./Experience.module.css";

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

import angular_IMG from "../../assets/skills/angular.png"
import typeScript_IMG from "../../assets/skills/typescript.png"
import cypress_IMG from "../../assets/skills/cypress.png"
import neo4j_IMG from "../../assets/skills/neo4j.png"
import graphql_IMG from "../../assets/skills/graphql.png"

import linux_IMG from "../../assets/skills/linux.png";

const Experience = () => {
  return (
    <section className={classes.experience_section} id="experience">
      <h1>My Experience</h1>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>

          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <img src={HTML_IMG} />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={CSS_IMG} />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={Java_IMG} />

              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={React_IMG} />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={angular_IMG} />
              <div>
                <h4>Angular</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={typeScript_IMG} />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={cypress_IMG} />
              <div>
                <h4>Cypress</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={Bootstrap_IMG} />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={python_IMG} />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={NextJS_IMG} />
              <div>
                <h4>Next.js</h4>
              </div>
            </article>
            
          </div>
        </div>

        <div className={classes.experience__backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <img src={graphql_IMG} />
              <div>
                <h4>GraphQL</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={neo4j_IMG} />
              <div>
                <h4>Neo4J</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={NodeJS_IMG} />
              <div>
                <h4>Node.js</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={mongo_IMG} />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={mysql_IMG} />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className={classes.experience__details}>
              <img src={linux_IMG} />
              <div>
                <h4>Linux</h4>
              </div>
            </article>

            <article className={classes.experience__details}>
              <img src={firebase_IMG} />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Experience;
