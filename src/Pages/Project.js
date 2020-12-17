import React from "react";
import ProjectsContainer from "../Containers/ProjectsContainer";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Project = () => {
  return (
    <main className={cx("main")}>
      <ProjectsContainer />
    </main>
  );
};

export default Project;
