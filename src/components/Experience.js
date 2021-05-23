import React from 'react'
import styled from 'styled-components'

const ExperienceCss = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 10px;
    width: 200px;
    height: 150px;
    justify-content: center;
    align-items: center;
    background-color: black;
    overflow: hidden; 

    p {
    font-family: "Josefin Sans", sans-serif;
    font-family: 16px;
    letter-spacing: 1px;
    margin-top: 20px;
}
`

const Experience = ({number,title,style}) => {
    return (
        <ExperienceCss>
        <div style={{ ...style}}> 
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
        </ExperienceCss>
    )
}

export default Experience
