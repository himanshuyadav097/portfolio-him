import React, { useState } from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-header">
        <img className="logo" src={logo} alt="logo" />

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li className="nav-menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/about">About Me</Link>
        </li>
        <li className="nav-menu-item">
          {" "}
          <Link to={"/blog"}>Blogs</Link>
        </li>
        <li className="nav-menu-item">Photos</li>
        <li className="nav-menu-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
