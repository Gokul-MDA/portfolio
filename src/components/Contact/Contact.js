import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from "@material-ui/core"
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons"
import "./Contact.css"

const Contact = () => {
    return (
       <Element className="contact" name="contact">
           <h1>Contact</h1>
           <div className="contact__container">
               <p>
                   Email : <span>gokul.mda@gmail.com</span>
               </p>
               <p>
                   Github Username : <span>@Gokul-MDA</span>
               </p>
               <div className="contact__icons">
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
               </div>
           </div>
       </Element>
    )
}

export default Contact
