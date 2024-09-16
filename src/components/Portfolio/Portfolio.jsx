import React, { useContext } from "react";
import "./Portfolio.css";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const projects = [
  {
    id: 1,
    image: Ecommerce,
    title: "Ecommerce Project",
    description:
      "solutions that enhance user experience and drive business success. With a continuous drive for learning and growth, I stay updated with the latest industry trends and technologies, ensuring that my skills are always at the forefront of the development landscape.",
  },
  {
    id: 2,
    image: Ecommerce,
    title: "UI/UX Design Project",
    description:
      "solutions that enhance user experience and drive business success. With a continuous drive for learning and growth, I stay updated with the latest industry trends and technologies, ensuring that my skills are always at the forefront of the development landscape.",
  },
  {
    id: 3,
    image: Ecommerce,
    title: "Web Development Project",
    description:
      "solutions that enhance user experience and drive business success. With a continuous drive for learning and growth, I stay updated with the latest industry trends and technologies, ensuring that my skills are always at the forefront of the development landscape.",
  },
  {
    id: 4,
    image: HOC,
    title: "HOC Project",
    description:
      "solutions that enhance user experience and drive business success. With a continuous drive for learning and growth, I stay updated with the latest industry trends and technologies, ensuring that my skills are always at the forefront of the development landscape.",
  },
  {
    id: 5,
    image: MusicApp,
    title: "Music App Project",
    description:
      "solutions that enhance user experience and drive business success. With a continuous drive for learning and growth, I stay updated with the latest industry trends and technologies, ensuring that my skills are always at the forefront of the development landscape.",
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="portfolio">
      <div className="main-text" id="project">
        <h2 style={{ marginBottom: "3rem" }}>
          latest<span>Project</span>
        </h2>
        <div className="portfolio-content">
          {projects.map((project) => (
            <div className="row" key={project.id}>
              <img src={project.image} alt="" />
              <div className="layer">
                <h2>{project.title}</h2>
                <div className="description">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  <a href="#">
                    <i
                      className="bx bx-link-external"
                      style={{ color: "#152d3a" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;