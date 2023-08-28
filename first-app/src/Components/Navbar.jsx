import React, { useState } from 'react'
import './NavbarStyles.css'


import {Link} from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }

    const [color,setcolor]=useState(false);
    const changeColor=()=>{
      if(window.scrollY>=100){
        setcolor(true);
      }
      else{
        setcolor(false);
      }
    }

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?".header":".header header bg"}>
      <Link to="/">
           <h1>Portfolia...</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Projects">Projects</Link>
        </li>
        <li>
            <Link to="/Contacts">Contact us</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?( <FaTimes size={20} style={{color:"#fff"}}></FaTimes>):( <FaBars size={20} style={{color:"#fff"}}></FaBars>)}
      </div>
    </div>
  )
}

export default Navbar
