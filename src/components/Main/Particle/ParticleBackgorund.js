import Particles from "react-tsparticles";
import particlesConfig from "../../../config/particle-config";
import React from "react";

import "./ParticleBackground.css";

const ParticleBackgorund = () => {
  // const particlesInit = (main) => {};
  // const particlesLoaded = (container) => {};
  return (
    <div id="particles-js">
      <Particles
        className="particle"
        id="tsparticles"
        // init={particlesInit}
        // loaded={particlesLoaded}

        params={particlesConfig}
      ></Particles>
    </div>
  );
};

export default ParticleBackgorund;
