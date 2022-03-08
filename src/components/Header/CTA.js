import React from "react";
import classes from "./Header.module.css";
import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
