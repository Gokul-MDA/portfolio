import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const TopContentCss = styled.div`
  color: white;
  position: relative;
`;

const TopContentContainer = styled.div`
  position: absolute;
  top: 250px;
  left: 100px;
  p {
    letter-spacing: 1px;
    text-align: left;
    padding-left: 3px;
    padding-top: 20px;
  }

  h1 {
    font-size: 60px;
    font-family: "Montserrat", sans-serif;
  }

  span {
    color: #5d37bd;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    top: 170px;
    left: 0;
  }
`;

// .topContent__container > a > button {
//     margin-top: 30px;
//     text-align: left;
//     margin-left: 5px;
//     border: none;
//     border-radius: 2px;
//     outline: none;
// }

const ButtonGrp = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Button = styled.div`
  color: white;
  background-color: #5d37bd;
  font-size: 14px;
  padding: 11px 25px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
  margin: -7px;

  Button:hover {
    color: #f64c08;
    background-color: white;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

const DownloadBtn = styled(Link)`
  color: white;
  background-color: transparent;
  border: 1px solid #5d37bd !important;
  font-size: 14px;
  padding: 10px 55px;
  font-family: "Monserrat", sans-serif;
  font-weight: 300;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

// .topContent__myWorkButton:hover {
//     color: black;
//     background-color: white;
//     font-weight: 600;
// }

const TopContent = () => {
  return (
    <TopContentCss>
      <TopContentContainer>
        <h1>Hi,</h1>
        <h1>
          I'm <span>Gokul</span>
        </h1>
        <h2>A Professional FrontEND Developer</h2>
        <ButtonGrp>
          <a href="www.google.com">
            <DownloadBtn>Resume</DownloadBtn>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <Button>My Work</Button>
          </Link>
        </ButtonGrp>
      </TopContentContainer>
    </TopContentCss>
  );
};

export default TopContent;
