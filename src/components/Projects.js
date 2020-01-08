import React from "react";
import Wrapper from "./Wrapper";
import { projects } from "../projectsData";
import Project from "./Project";
import "../styles/projects.css";

const Projects = () => {
  const allProjects = projects.map(project => (
    <Project data={project} key={project.title} />
  ));

  return (
    <Wrapper>
      <div className="projects">{allProjects}</div>
    </Wrapper>
  );
};

export default Projects;
