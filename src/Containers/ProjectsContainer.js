import React from "react";
import Title from "../Components/Title";
import ProjectCards from "../Components/ProjectCards";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";

const cx = classNames.bind(styles);

const ProjectsContainer = () => {
  return (
    <section className={cx("projectSection")}>
      <Title>PROJECTS</Title>
      <ProjectCards />
    </section>
  );
};

export default ProjectsContainer;
