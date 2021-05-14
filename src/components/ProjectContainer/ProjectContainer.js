import React from 'react'
import Project from '../Project/Project'
import { Element } from 'react-scroll'
import "./ProjectContainer.css"

const ProjectContainer = () => {

    const projects = [
        {
            img:"https://d2sj89osparb2a.cloudfront.net/images/media/oyo-rooms-online-booking.png",
            title: "OyoRooms",
            desc:"OYOrooms it is a room booking software",
            link: "www.oyorooms.com"
        },
        {
            img:"https://d2sj89osparb2a.cloudfront.net/images/media/oyo-rooms-online-booking.png",
            title: "OyoRooms",
            desc:"OYOrooms it is a room booking software",
            link: "www.oyorooms.com"
        },
        {
            img:"https://d2sj89osparb2a.cloudfront.net/images/media/oyo-rooms-online-booking.png",
            title: "OyoRooms",
            desc:"OYOrooms it is a room booking software",
            link: "www.oyorooms.com"
        },
        {
            img:"https://d2sj89osparb2a.cloudfront.net/images/media/oyo-rooms-online-booking.png",
            title: "OyoRooms",
            desc:"OYOrooms it is a room booking software",
            link: "www.oyorooms.com"
        },
      
    ];
    return (
        <Element className="projectContainer" name="projects">
            <h1>Projects</h1>
            <p>
                Here are some projects which I done for making lives of people easy.
            </p>
            <div className="projectContainer__projects">
                {
                    projects.map((project,index)=> {
                        return (
                            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />
                        )
                         } )
                }

            </div>
        </Element>
    )
}

export default ProjectContainer
