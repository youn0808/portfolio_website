import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import classes from "./Experience.module.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>

          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className={classes.experience__backend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className={classes.experience__details}>
              <BsPatchCheckFill className={classes.experience__details_icons} />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
