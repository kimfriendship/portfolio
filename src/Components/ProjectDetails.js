import React from "react";
import ProjectCarouselContainer from "../Containers/ProjectCarouselContainer";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";
import data from "../Data/projectData";
import { Github } from "@styled-icons/icomoon/Github";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { Link } from "@styled-icons/boxicons-regular/Link";
import { PeopleFill } from "@styled-icons/bootstrap/PeopleFill";

const cx = classNames.bind(styles);

const ProjectDetails = ({ projectId }) => {
  const project = data.filter(({ id }) => id === projectId)[0];
  const {
    name,
    date,
    member,
    detail,
    features,
    techStack,
    page,
    github,
    images,
  } = project;

  return (
    <>
      <h3 className={cx("title")}>{name.toUpperCase()}</h3>
      <ProjectCarouselContainer images={images} />
      <div className={cx("infoWrapper")}>
        <span className={cx("info")}>{detail}</span>
        <span className={cx("info")}>
          <Calendar size="20" className={cx("icons")} />
          {date}
        </span>
        <span className={cx("info")}>
          <PeopleFill size="20" className={cx("icons")} />
          {member}
        </span>
        <span className={cx("info")}>
          <Github size="20" className={cx("icons")} />
          <a href={github}>Repository 바로가기</a>
        </span>
        {page && (
          <span className={cx("info")}>
            <Link size="20" className={cx("icons")} />
            <a href={page}>페이지 바로가기</a>
          </span>
        )}
      </div>
      <div className={cx("wrapper")}>
        <h4 className={cx("subtitle")}>Features</h4>
        <ul className={cx("list")}>
          {features.map((feature, i) => (
            <li key={i} className={cx("item")}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className={cx("wrapper")}>
        <h4 className={cx("subtitle")}>Tech Stack</h4>
        <ul className={cx("list")}>
          {techStack.map((tech, i) => (
            <li key={i} className={cx("item")}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectDetails;
