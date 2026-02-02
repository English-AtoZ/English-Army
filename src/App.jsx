import { useState, useEffect } from "react";
import "./App.css"; // Add this



import { Routes, Route, BrowserRouter } from "react-router-dom";



import About from "./Nav-Head/About";
import Contact from "./Nav-Head/Contact";
import PrivacyPolicy from "./Nav-Head/PrivacyPolicy";
import Terms from "./Nav-Head/Terms";

import Navbar from "./Nav-Head/Navbar";
import Footer from "./Nav-Head/Footer";
import Home from './Home'

const App = () => {
  return (
    <div>


      <BrowserRouter>
        
      <Navbar />

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

 
    </BrowserRouter>



    </div>
  )
}

export default App