import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import bootstrap from "../images/bootstrap.svg";
import react from "../images/react.svg";
import github from "../images/github.svg";

const SkillContainerCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  h1 {
    font-family: "Montserrat", sans-serif;
    color: white;
    border-bottom: 4px solid #5d37bd;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SkillContainerImg = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 250px;
  row-gap: 150px;

  img {
    width: 60px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 90px;
  }
`;

const SkillContainer = () => {
  return (
    <Element name="skills">
      <SkillContainerCss>
        <h1>Skill Set</h1>
        <SkillContainerImg>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={bootstrap} alt="" />
          <img src={js} alt="" />
          <img src={react} alt="" />
          <img src={github} alt="" />
        </SkillContainerImg>
      </SkillContainerCss>
    </Element>
  );
};

export default SkillContainer;
