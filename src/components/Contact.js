import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from "@material-ui/core"
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons"
import styled from 'styled-components'


const ContactCss = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    margin: 200px 0 100px;
    align-items: center;
`

const ContactContainer = styled.div`
    border: 1px solid white;
    width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-top: 20px; 

    p {
    font-size: 20px;
    text-align: left;
    padding-bottom: 30px;
}

span {
    color: #f64c08;
}

@media screen and (max-width: 768px) {
    
        width: 300px;
    
}

`

const ContactIcons = styled.div`
    MuiSvgIcon-root  {
    color: white;
    font-size: 30px;
}

uiIconButton-root {
    color: white;
}


`
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
               <p>
                   Github Username : <span>@Gokul-MDA</span>
               </p>
               <ContactIcons>
                   <a href="https://www.linkedin.com/in/gokul-d-9384321a0/">
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
                   </ContactIcons>
               </ContactContainer>
           </ContactCss>
       </Element>
    )
}

export default Contact
