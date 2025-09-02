import React from "react";
import "./Hero.css";

import profile_img from "./../../assets/logo-profile.jpg";

const Hero = () => {
  return (
    <div className="Hero">
      <img className="logo-profile" src={profile_img} alt="logo" />
      <h1>
        <span>I' Himanshu,</span> frontend developer based in India
      </h1>
      <p>
        Hi, I'm Himanshu — a Frontend Developer based in India with 8 years of
        experience building modern, user-focused web applications.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
