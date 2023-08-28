import "./FooterStyle.css"

import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-container">
        <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>Shivamogga(577201),Karnataka</p>
                <p>India</p>
            </div>
         </div>
         <div className="phone">
            <h4 className="phone-1">
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                  8884934918
                </div>
            </h4>
         </div>
         <div className="email">
            <h4 className="email-1">
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                  kiranshashi383@gmail.com,
                  shashikiran1297@gmail.com
                </div>
            </h4>
         </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p> Hi, my name is Shashhikiran. I graduated from [Visvesvaraya Technological University, Belgaum] with 
                a degree in [Civil Engineering] in [2020].I certified in Java Fullstack Development and ReactJs .I am passionate about IT industry and I am eager to learn 
                and grow in my career.</p>
                <div className="social">
                 <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                 <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                 <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
