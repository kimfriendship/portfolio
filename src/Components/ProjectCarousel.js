import React from "react";
import styles from "../Scss/project.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProjectCarousel = () => {
  return (
    <div className={cx("carousel")}>
      <figure className={cx("figure")}>
        <img className={cx("image")} src="" alt="" />
        <figcaption className={cx("caption")}></figcaption>
      </figure>
    </div>
  );
};

export default ProjectCarousel;
