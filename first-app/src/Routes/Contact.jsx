import React from 'react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImage2 from '../Components/HeroImage2'
import ContactContenet from '../Components/ContactContenet'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImage2 heading="CONTACT." text="Lets have a chat" />
       <ContactContenet/>
       <Footer/>
    </div>
  )
}

export default Contact
