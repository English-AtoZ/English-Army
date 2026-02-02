import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import englisharmylogo from './englisharmylogo.jpeg'

const Navbar = () => {


  return (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid"> 
     {/*  class="rounded-pill"   style="width:40px;"       <img className="navbar-brand" src={englisharmylogo}  style={{width:'60px',height:'100%' , backgroundColor:'transparent'}}   /> */}
    <NavLink className="navbar-brand" to="/">English Army</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className='m-2 p-1' to="/" onClick={() => setOpen(false)} >
            Home
          </NavLink>
        </li>
        {/* <li className="nav-item">
         <NavLink className='m-2 p-1' to="/about" onClick={() => setOpen(false)} >
            About
          </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className='m-2 p-1' to="/contact" onClick={() => setOpen(false)} >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='m-2 p-1' to="/privacy" onClick={() => setOpen(false)} >
            Privacy Policy
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='m-2 p-1' to="/terms" onClick={() => setOpen(false)} >
            Terms & Conditions
          </NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;






