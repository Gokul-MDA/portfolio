import React, { useState } from "react";
import styled from "styled-components";

const ProjectCss = styled.div`
  margin: 22px;
  width: 375px;
  height: 250px;
  border: 1px solid #5d37bd;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 150px;
    margin-left: -30px !important;
  }
`;
const Project1 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  /* transition: transform 0.6s;
  transform-style: preserve-3d; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const ProjectImage = styled.div`
  img {
    width: 375px;
    height: 250px;
    border-radius: 10px;
    backface-visibility: hidden;

    &:hover {
      transition: transform 0.6s;
      transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
      width: 300px;
      height: 150px;
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  background-color: #5d37bd;
  width: 375px;
  height: 250px;
  border-radius: 10px;
  /* transform: perspective(600px) rotateY(180deg);
  transition: transform 0.6s linear;
  transform-style: preserve-3d;
  backface-visibility: hidden; */

  h4 {
    padding-bottom: 5px;
  }

  p {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 150px;
  }
`;

const Project = ({ img, title, desc, link }) => {
  const [show, setShow] = useState(false);
  return (
    <a href={link}>
      <div
      // onMouseEnter={() => setShow(true)}
      // onMouseLeave={() => setShow(false)}
      >
        <ProjectCss>
          <Project1>
            {show ? (
              <ProjectContent>
                <h4>{title}</h4>
                <p>{desc}</p>
              </ProjectContent>
            ) : (
              <ProjectImage>
                <img src={img} alt="" />
              </ProjectImage>
            )}
          </Project1>
        </ProjectCss>
      </div>
    </a>
  );
};

export default Project;
