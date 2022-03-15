import React from "react";
import classes from "./Main.module.css";
import ParticleBackgorund from "../Main/Particle/ParticleBackgorund";
import Navigation from "../Main/Navigation/Navigation";
import Home from "../Main/Home/Home";
const Main = () => {
  return (
    <div className={classes.main}>
      <ParticleBackgorund />
      <div className={classes.container}>
        <Navigation />
        <Home />
      </div>
    </div>
  );
};

export default Main;
