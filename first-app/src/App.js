import React from 'react';
import './index.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './Routes/HomePage';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Projects' element={<Project/>} />
    <Route path='/Contacts' element={<Contact/>} />
   </Routes>
   </>
  );
}

export default App;
