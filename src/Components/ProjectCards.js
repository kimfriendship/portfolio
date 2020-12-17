import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";

const cx = classNames.bind(styles);

const ProjectCards = ({ project, openModal }) => {
  const { id, name, date, topic, thumbnail } = project;
  return (
    <li className={cx("card")} onClick={() => openModal(id)}>
      <img
        className={cx("cardImg")}
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      {name}
    </li>
  );
};

export default ProjectCards;
