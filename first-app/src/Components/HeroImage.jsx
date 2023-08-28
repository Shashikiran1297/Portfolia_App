import React from 'react'
import "../Components/HeroImageStyle.css"
import DEV from "../Assets/intro-img.jpg"
import {Link} from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={DEV} alt="Development" className="into-img" />
        </div>
        <div className="content">
            <p>Hi I'm Shashikiran</p>
            <h1>Java Fullstack Developer</h1>
            <div className='conect'>
                <Link to="/Projects" className='btn'>Projects</Link>
                <Link to="/Contacts" className='btn btn-light'>Contact us</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage
