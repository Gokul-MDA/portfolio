import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Bars from "../images/bars.svg";

const HeaderCss = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #161a1e;
  border-bottom: 1px solid #5d37bd;
  top: 0;
  position: sticky;
  z-index: 2000;

  @media screen and (max-width: 768px) {
    background-color: transparent;
    border: none;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  h4 {
    font-size: 18px;
    cursor: pointer;
    font-family: "Crimson Text" serif;
    letter-spacing: 1px;
  }

  h4:hover {
    border-bottom: 4px solid #5d37bd;
    color: white;
    font-family: "Crimson Text" serif;
    cursor: pointer;
  }
`;

const MenuBars = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: Contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const Header = ({ toggle }) => {
  return (
    <HeaderCss>
      <MenuBars onClick={toggle}></MenuBars>
      <HeaderMenu>
        <Link to="about" smooth={true} duration={500}>
          <h4>About</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </HeaderMenu>
    </HeaderCss>
  );
};

export default Header;
