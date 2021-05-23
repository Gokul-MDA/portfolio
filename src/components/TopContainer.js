import React from 'react'
import { Element } from 'react-scroll'
import TopContent from './TopContent'
import styled from 'styled-components'
import image from '../images/background.jpg'

const TopContainerCss = styled.div`
    background: url(${image});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5); */

    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: relative;
    background-position: center;
    height: 100vh;
    width: 100%;
}

`

const TopContainer = () => {
    return (
        <Element name='about'>
            <TopContainerCss>
            <TopContent />
            </TopContainerCss>

        </Element>
    )
}

export default TopContainer
