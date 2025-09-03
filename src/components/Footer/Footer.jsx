import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Himanshu — Frontend Developer
        </p>
        <div className="footer-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:himanshuyadav097@gmail.com"
            className="footer-link"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
