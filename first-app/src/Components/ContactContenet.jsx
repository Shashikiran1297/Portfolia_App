import "../Components/ContactContentStyle.css";

import React from 'react'

const ContactContenet = () => {
  return (
    <div className="form">
       <form action="">
          <label htmlFor="">Your Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Subject</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea rows="6" placeholder="Type your message here"/>
           <button className="btn">Send</button>
       </form>
    </div>
  )
}

export default ContactContenet;
