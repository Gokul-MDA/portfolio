import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn, GitHub } from "@material-ui/icons";
import styled from "styled-components";

const ContactCss = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  background-color: black;

  h1 {
    margin-top: 50px;
    color: white;
  }
`;

const ContactContainer = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    text-align: left;
    padding-bottom: 30px;
    color: white;
  }

  span {
    color: #c46867;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const ContactIcons = styled.div`
  MuiSvgIcon-root {
    color: white;
    font-size: 30px;
  }

  uiIconButton-root {
    color: white;
  }
`;
// .contact__icons > a > button > span > .
// .contact__icons > a > .M

const Contact = () => {
  return (
    <Element name="contact">
      <ContactCss>
        <h1>Contact</h1>
        <ContactContainer>
          <p>
            Email : <span>gokul.mda@gmail.com</span>
          </p>
          {/* <p>
            Github Username : <span>@Gokul-MDA</span>
          </p> */}
          <ContactIcons>
            <a href="https://www.linkedin.com/in/gokul-d-b3a969213/">
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100005438850633">
              <IconButton>
                <Facebook />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/go__cool17/">
              <IconButton>
                <Instagram />
              </IconButton>
            </a>
            <a href="https://github.com/Gokul-MDA">
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
          </ContactIcons>
        </ContactContainer>
      </ContactCss>
    </Element>
  );
};

export default Contact;
