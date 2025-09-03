import React from "react";
import ProjectCards from "./ProjectCards";
import "./projects.css";

const projects1 = [
  {
    title: "HBNEXT",
    description:
      "Managing safety, compliance, and training across projects, teams, and locations shouldn’t be a burden. However, construction and industrial companies often struggle to manage spreadsheets, outdated manuals, and siloed systems. This disorganization can lead to costly oversights, accidents, citations, and skyrocketing insurance premiums.",
    link: "https://www.hbnext.com/sequence-xt/training-and-lms/",
    stack: "React, CSS, JavaScript",
  },
  {
    title: "Sequence",
    description:
      "Implemented HBNext safety features to enhance compliance, reduce incidents, and improve on-site safety monitoring.",
    link: "https://nextsequence.io/",
    stack: "React, CSS, JavaScript ,Redux",
  },
  {
    title: "Matchupit",
    description:
      "Used Matchup it to connect with professionals and explore job opportunities through a career-focused networking platform.",
    link: "https://matchupit.com/",
    stack: "React, CSS, JavaScript ,Redux",
  },
  {
    title: "GATES",
    description:
      "Gates CMS is providing API for Data Collector APP of client which is basically used to collect barcoded and non-barcoded products in form of information and images along with their nutrients information. These data is displaying in CMS with various type of reports which is exported from mongo.",
    link: "http://gates.foodswitch.info/",
    stack: "React, CSS, JavaScript ,Redux",
  },
  {
    title: "TGIDOCS",
    description: "All documents in one place for The George Institute.",
    link: "https://tgidocs.techletsolutions.com/",
    stack: "React, Redux",
  },
  {
    title: "FAIRY TALES",
    description: "E-commerce website",
    link: "http://fairytalesbeta.techletsolutions.com/",
    stack: "Drupal 7, PHP/MySQL, CSS, JavaScript",
  },

  {
    title: "TGI",
    description:
      "At The George Institute, we believe everyone has the right to a healthy life. We are a research organisation that finds solutions to some of the world's biggest health challenges.",
    link: "https://your-blog-link.com",
    stack: "Manual Tester",
  },
];

const Projects = () => {
  return (
    <div className="projects-grid">
      {projects1.map((project, index) => (
        <ProjectCards
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          stack={project.stack}
        />
      ))}
    </div>
  );
};

export default Projects;
