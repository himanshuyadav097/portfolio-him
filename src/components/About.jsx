import React from "react";
import "./About.css"; // Optional: for external styling

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We're a passionate team of developers,
          designers, and creators dedicated to building high-quality web
          experiences that are fast, accessible, and beautiful.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver top-notch solutions that help individuals
          and businesses thrive in the digital world. Whether it's a portfolio,
          an e-commerce site, or a complex web application — we aim for
          excellence.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> Constantly exploring new ideas.
          </li>
          <li>
            <strong>Quality:</strong> Writing clean, maintainable code.
          </li>
          <li>
            <strong>Integrity:</strong> Being transparent with our work and
            communication.
          </li>
          <li>
            <strong>Community:</strong> Supporting others and growing together.
          </li>
        </ul>

        <h2>What We Do</h2>
        <p>
          We specialize in:
          <ul>
            <li>Front-end development (React, Vue, Angular)</li>
            <li>Back-end development (Node.js, Express, Django)</li>
            <li>UI/UX Design</li>
            <li>Performance Optimization</li>
            <li>SEO & Accessibility</li>
          </ul>
        </p>

        <p>Thank you for visiting. We look forward to working with you!</p>
      </div>
    </section>
  );
};

export default About;
