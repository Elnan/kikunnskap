import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Funksjon for å bytte mellom åpen og lukket
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Funksjon for å sjekke om en sti er aktiv
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={isOpen ? "open" : "closed"}>
      <div
        id="nav-icon"
        onClick={toggleNavbar}
        className={isOpen ? "open" : "closed"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-list ${isOpen ? "open" : "closed"}`}>
        <li className={isActive("/") ? "active" : ""}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={isActive("/about") ? "active" : ""}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={isActive("/portfolio") ? "active" : ""}>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className={isActive("/spill") ? "active" : ""}>
          <NavLink to="/spill">Spill</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
