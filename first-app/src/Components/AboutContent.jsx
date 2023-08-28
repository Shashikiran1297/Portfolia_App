import "../Components/AboutContentStyle.css";

import React from 'react';
import {Link} from "react-router-dom";
import spring from "../Assets/sbd.jpg";
import react from "../Assets/reactjs.jpg";

const AboutContent = () => {
  return (
     <div className="outer-container">
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a Java Fullstack Developer.I Create Rest Api as per  Clients Requirements</p>
            <Link to="/Contacts">
               <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="image-stack top" >
                    <img src={spring} className="img"  alt="Not found" />
                </div>
                <div className="image-stack bottom">
                    <img src={react} className="img" alt="Not found" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent

