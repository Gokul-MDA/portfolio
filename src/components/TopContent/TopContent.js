import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>Mr.Gokul D</h1>
                <p>A Professional FrontEND Developer</p>
                <a href="www.google.com">
                    <button className="topContent__downloadButton">Download</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent__myWorkButton">My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent
