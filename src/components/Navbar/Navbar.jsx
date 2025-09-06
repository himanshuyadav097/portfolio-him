import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-menu-item">
          {" "}
          <Link to="/about">About Me</Link>
        </li>
        <li className="nav-menu-item">
          Services
          {/* <Link to="/services">Services</Link> */}
        </li>
        <li className="nav-menu-item">
          {" "}
          Portfolio
          {/* <Link to="/portfolio">Portfolio</Link> */}
        </li>
        <li className="nav-menu-item">
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
