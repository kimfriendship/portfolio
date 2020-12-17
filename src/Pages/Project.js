import React from "react";
import ProjectsContainer from "../Containers/ProjectsContainer";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";

const cx = classNames.bind(styles);

const Project = () => {
  return (
    <main className={cx("mainProject")}>
      <ProjectsContainer />
    </main>
  );
};

export default Project;
