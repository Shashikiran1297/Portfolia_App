import "../Components/WorkCardStyle.css";
import React from 'react'
import {NavLink}from "react-router-dom";
import pro1 from "../Assets/pro1.jpg"

const WorkCard = () => {
  return (
   
<div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
      <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Before Booking our ticket we know the rating of the movie after that we decide book or not.</p>
                <div className="pro-btns">
                    <NavLink to="https://resturent-app-plum.vercel.app/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Responsive Hotel Food Order Page </p>
                <div className="pro-btns">
                    <NavLink to="https://resturent-app-plum.vercel.app/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Before Booking our ticket we know the rating of the movie after that we decide book or not.</p>
                <div className="pro-btns">
                    <NavLink to="https://shashikiran1297.github.io/crazyOtt/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Before Booking our ticket we know the rating of the movie after that we decide book or not.</p>
                <div className="pro-btns">
                    <NavLink to="https://shashikiran1297.github.io/crazyOtt/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Before Booking our ticket we know the rating of the movie after that we decide book or not.</p>
                <div className="pro-btns">
                    <NavLink to="https://shashikiran1297.github.io/crazyOtt/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
        <div className="project-card">
            <img src={pro1} alt="not found" />
            <h2 className="project-title">Movie Rating App</h2>
            <div className="pro-details">
                <p>Before Booking our ticket we know the rating of the movie after that we decide book or not.</p>
                <div className="pro-btns">
                    <NavLink to="https://shashikiran1297.github.io/crazyOtt/" className="btn">
                      View
                    </NavLink>
                    <NavLink to="url.com" className="btn">
                      Source
                    </NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default WorkCard
