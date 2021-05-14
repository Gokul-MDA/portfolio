import React from 'react'
import { Element } from 'react-scroll'
import Experience from "../ExperienceBox/Experience"
import "./ExperienceContainer.css"

const ExperienceContainer = () => {
    return (
        <Element className="experienceContainer" name="exp">
            <h1>Experience</h1>
            <div className="experienceContainer__info">
            <Experience number="+10" title="Clients"/>
            <Experience number="3+" title="Projects"/>
            </div>
        </Element>
    )
}

export default ExperienceContainer
