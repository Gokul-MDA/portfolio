import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'
import Experience from "./Experience"

const ExperienceContainerCss = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    margin: 200px 0;
    align-items: center;

    h1 {
    padding-bottom: 20px;
}
`

const ExperienceContainerInfo = styled.div`
    background: url(/src/exp.jpg);
    background-position: center;
    background-size: cover;
    height: 400px;
    z-index: 1000px;
    width: 80vw;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        column-gap: 30px !important;
    }
`

const ExperienceContainer = () => {
    return (
        <Element name="exp">
            <ExperienceContainerCss>
            <h1>Experience</h1>
            <ExperienceContainerInfo>
            <Experience number="3+" title="Clients"/>
            <Experience number="5+" title="Projects"/>
            </ExperienceContainerInfo>
            </ExperienceContainerCss>
        </Element>
    )
}

export default ExperienceContainer
