import React from "react";
import Project from "./Project";
import { Element } from "react-scroll";
import styled from "styled-components";
import realestate from "../images/realestate.png";
import portfolio from "../images/portfolio.png";
import portfolio2 from "../images/portfolio2.png";
import oyo from "../images/oyo.png";

const ProjectContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  margin: 200px 20px;
  align-items: center;

  h1 {
    font-family: "Montserrat", sans-serif;
    border-bottom: 4px solid #5d37bd;
    color: white;
  }

  p {
    margin-top: 20px;
    padding-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    color: white;
  }
`;

// @media screen and (max-width: 1920px) {
//     .projectContainer {
//         margin-left: -30px;
//     }

//     .projectContainer > p {
//         margin-left: 50px;
//         margin-top: 30px;
//         font-size: 21px;
//     }

//     .projectContainer > h1 {
//         margin-left: 70px;
//     }
// }

const ProjectContainerProjects = styled.div`
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  row-gap: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    column-gap: 0;
    margin-left: 50px;
    /* margin-left: 90px !important; */
    align-items: center;
    justify-content: center;
  }
`;

const ProjectContainer = () => {
  const projects = [
    {
      img: portfolio,
      title: "PortFolio Website for frontEndDev",
      desc: "My Portfolio site, Responsive for both mobile and computer",
      link: "https://gokul-portfolio.netlify.app",
    },
    {
      img: realestate,
      title: "Real-Estate",
      desc: "Real Estate Chennai - Browse residential properties for sale in Chennai - New Projects, Resale Flats, Ready To Move in Apartments. 100% Verified Listings ",
      link: "https://rea-estate.netlify.app",
    },
    {
      img: oyo,
      title: "OyoRooms",
      desc: "OYOrooms it is a room booking software",
      link: "https://oyorooms-clone.netlify.app",
    },
    {
      img: portfolio2,
      title: "PortFolio Website for frontEndDev",
      desc: "My Portfolio site, Responsive for both mobile and computer",
      link: "https://gokul-portfolio.netlify.app",
    },
  ];
  return (
    <Element name="projects">
      <ProjectContainerCss>
        <h1>Projects</h1>
        <p>
          Here are some projects which I done for making lives of people easy.
        </p>
        <ProjectContainerProjects>
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            );
          })}
        </ProjectContainerProjects>
      </ProjectContainerCss>
    </Element>
  );
};

export default ProjectContainer;
