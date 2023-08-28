import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage from '../Components/HeroImage'
import Footer from '../Components/Footer'
import WorkCard from "../Components/WorkCard"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage/>  
      <WorkCard/>
      <Footer/>
    </div>
  )  
}

export default HomePage
