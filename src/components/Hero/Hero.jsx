import React from "react";
import "./Hero.css";
import profile_img from "./../../assets/logo-profile.jpg";

const Hero = () => {
  return (
    <div className="Hero">
      <img className="logo-profile" src={profile_img} alt="logo" />
      <h1>
        <span>Himanshu </span> | Frontend Developer
      </h1>

      <p>
        Hi, I'm Himanshu — a Frontend Developer based in India with 7+ years of
        experience building modern, user-focused web applications.
      </p>
      <div className="hero-action">
        <a
          href="https://www.naukri.com/mnjuser/homepage"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-connect"
        >
          Connect with me
        </a>

        <a href="/Resume-25_1.pdf" download className="resume-button">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
