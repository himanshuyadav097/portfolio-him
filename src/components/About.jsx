import React from "react";
import "./About.css"; // Optional: external styles

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I am a Software Developer with over 7+ years of experience in the IT
          industry.
        </p>

        <h2>Projects</h2>
        <p>I have worked on various projects including:</p>
        <ul>
          <li>HB Next/Sequence</li>
          <li>MatchupIT</li>
          <li>The George Institute for Global Health</li>
          <li>TGIDOCS For CMS</li>
          <li>FAIRY TALES</li>
        </ul>
        <p>My skills include HTML, CSS, JavaScript, and React.</p>

        <h2>Core Values</h2>
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

        <h2>What I Do</h2>

        <ul>
          <li>Front-end development (React)</li>
          <li>UI Design</li>
          <li>Performance Optimization</li>
        </ul>

        <p>Thank you for visiting. I look forward to working with you!</p>
      </div>
    </section>
  );
};

export default About;
