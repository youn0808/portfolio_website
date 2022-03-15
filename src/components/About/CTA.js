import React from "react";
import classes from "./About.module.css";

import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={Resume} download className="btn btn-primary">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
