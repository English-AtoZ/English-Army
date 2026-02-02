import React from "react";
import { NavLink } from "react-router-dom";
import englisharmylogo from "./englisharmylogo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">

        {/* Logo / Brand */}
        <NavLink className="navbar-brand" to="/">
          English Army
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link m-2 p-1" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link m-2 p-1" to="/about">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link m-2 p-1" to="/contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link m-2 p-1" to="/privacy">
                Privacy Policy
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link m-2 p-1" to="/terms">
                Terms & Conditions
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
