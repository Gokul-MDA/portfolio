import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 20%;
  height: 100%;
  background: #5d37bd;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 80%;
    background: #5d37bd;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-80%")};
  }
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

// const DropdownLink = styled(Link)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     font-size: 1.5rem;
//     text-decoration: none;
//     list-style: none;
//     cursor: pointer;
//     transition: 0.2s ease-in-out;

//     &:hover {
//         color: #000d1a;
//         text-decoration: none;
//     }
// `

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <DropdownWrapper>
        <DropdownMenu>
          <Link to="about" smooth={true} duration={500}>
            <h4>About</h4>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <h4>Projects</h4>
          </Link>
          <Link to="exp" smooth={true} duration={500}>
            <h4>Experience</h4>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <h4>Contact</h4>
          </Link>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
