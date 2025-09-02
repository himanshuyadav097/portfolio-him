import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav-menu">
        <li className="nav-menu-item">Home</li>
        <li className="nav-menu-item">About Me</li>
        <li className="nav-menu-item">Services</li>
        <li className="nav-menu-item">Portfolio</li>
        <li className="nav-menu-item">Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
