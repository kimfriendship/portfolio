import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";

const cx = classNames.bind(styles);

const ProjectCards = ({ project, openModal }) => {
  const { id, name, date, detail, image } = project;
  return (
    <li className={cx("card")} onClick={() => openModal(id)}>
      <img className={cx("cardImg")} src={image} alt={`${name} thumbnail`} />
      {name}
    </li>
  );
};

export default ProjectCards;
