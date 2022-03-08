import React from "react";
import classes from "./Portfolio.module.css";
import portfolioIMG1 from "../../assets/portfolio_img1.webp";

const portfolio_data = [
  {
    id: 1,
    image: portfolioIMG1,
    title: "University schdule website",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
  {
    id: 2,
    image: portfolioIMG1,
    title: "Second project",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
  {
    id: 3,
    image: portfolioIMG1,
    title: "Third project",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
  {
    id: 4,
    image: portfolioIMG1,
    title: "PROJECT",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
  {
    id: 5,
    image: portfolioIMG1,
    title: "PROJECT",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
  {
    id: 6,
    image: portfolioIMG1,
    title: "PROJECT",
    github: "https://github.com/youn0808/javascript_exercise",
    demo: "Demo website",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes.portfolio__container}`}>
        {portfolio_data.map((data) => {
          return (
            <article key={data.id} className={classes.portfolio__item}>
              <div className={classes.portfolio__item_image}>
                <img src={data.image} alt={data.title} />
              </div>
              <h3>{data.title}</h3>
              <div className={classes.portfolio__item_cta}>
                <a href={data.github} className="btn" target="_blank">
                  Github
                </a>
                <a href={data.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
