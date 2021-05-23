import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../images/skill.png'
import LinearProgress from "@material-ui/core/LinearProgress"
import styled from 'styled-components'

const SkillContainerCss = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

// @media screen and(max - width: 1920px) {
//     .skillContainer{
//         display: flex;
//         flex - direction: column;
//         margin - left: 20px;
//     }

//     .skillContainer__image {
//         width: 80 %;
//     }

//     .skillContainer__image > img {
//         width: 350px!important;
//         margin - left: 60px;
//     }

//     .skillContainer__text {
//         margin - top: 150px;
//         width: 450px;
//         margin - left: 180px;
//     }

//     .skillContainer__skillSet {
//         margin - top: 40px;
//     }

//     .skillContainer__slider {
//         width: 300px;
//     }

// }


const SkillContainerImg = styled.div`
    flex: 0.4;
    text-align: center;
    margin-right: 100px;

    img {
    width: 600px;
    border-radius: 3px;
    object-fit: contain;


    @media screen and (max-width: 768px) {
        width: 250px;
        margin-left: 90px;

        img {
            margin-left: 30px;
        }
    }
}
`

const SkillContainerText = styled.div`
    color: white;
    flex: 0.6;
    text-align: left;
    max-width: 550px;
    margin-bottom: 20px;

    h2 {
    font-size: 30px;


    @media screen and (max-width: 768px) {
     margin-top: 90px;
    }
}
`

const SkillContainerSkillSet= styled.div`
 h5 {
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    padding-top: 30px;
    padding-bottom: 30px;
}


@media screen and (max-width: 768px) {
        width: 300px;
        padding: 10px;
    }
`
const SkillContainerSlider1 = styled.div`
div {
MuiLinearProgress-barColorPrimary {

background-color: red;
}}
`
const SkillContainerSlider2 = styled.div``
const SkillContainerSlider3 = styled.div``
const SkillContainerSlider4 = styled.div``
const SkillContainerSlider5 = styled.div``


// .skillContainer__slider > .MuiLinearProgress - colorPrimary {
//     background - color: rgb(88, 88, 88);
// }

// .skillContainer__slider1 > div > .MuiLinearProgress - barcolorPrimary {
//     background - color: tomato;
// }

// .skillContainer__slider2 > div > .MuiLinearProgress - barcolorPrimary {
//     background - color: rgb(156, 26, 3);
// }

// .skillContainer__slider3 > div > .MuiLinearProgress - barcolorPrimary {
//     background - color: rgb(255, 145, 0);
// }

// .skillContainer__slider4 > div > .MuiLinearProgress - barcolorPrimary {
//     background - color: rgb(288, 213, 0);
// }

// .skillContainer__slider5 > div > .MuiLinearProgress - barcolorPrimary {
//     background - color: rgb(255, 209, 6);
// }

const SkillContainer = () => {
    return (
        <Element name="skills" >
            <SkillContainerCss>
                <SkillContainerImg>
                    <img src={skillimg} alt="" />
                </SkillContainerImg>
                <SkillContainerText>
                    <h2>SKILLSET</h2>
                    <SkillContainerSkillSet>
                        <h5>HTML</h5>
                        <SkillContainerSlider1>
                            <LinearProgress variant="determinate" value={80} />
                        </SkillContainerSlider1>
                    </SkillContainerSkillSet>
                    <SkillContainerSkillSet>
                        <h5>CSS</h5>
                        <SkillContainerSlider2>
                            <LinearProgress variant="determinate" value={75} />
                        </SkillContainerSlider2>
                    </SkillContainerSkillSet>
                    <SkillContainerSkillSet>
                        <h5>React</h5>
                        <SkillContainerSlider3>
                            <LinearProgress variant="determinate" value={70} />
                        </SkillContainerSlider3>
                    </SkillContainerSkillSet>
                    <SkillContainerSkillSet>
                        <h5>Angular</h5>
                        <SkillContainerSlider4>
                            <LinearProgress variant="determinate" value={60} />
                        </SkillContainerSlider4>
                    </SkillContainerSkillSet>
                    <SkillContainerSkillSet>
                        <h5>Django</h5>
                        <SkillContainerSlider5>
                            <LinearProgress variant="determinate" value={50} />
                        </SkillContainerSlider5>
                    </SkillContainerSkillSet>

                </SkillContainerText>
            </SkillContainerCss>

        </Element>
    )
}

export default SkillContainer
