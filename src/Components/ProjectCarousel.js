import React from "react";
import styles from "../Scss/project.module.scss";
import classNames from "classnames/bind";
import NavButton from "./NavButton";

const cx = classNames.bind(styles);

const ProjectCarousel = ({ images }) => {
  return (
    <div className={cx("carousel")}>
      <NavButton direction={0} />
      <NavButton direction={1} />
      {images.map(({ src, alt, caption }, i) => (
        <figure key={i} className={cx("figure")}>
          <img className={cx("image")} src={src} alt={alt} />
          <figcaption className={cx("caption")}>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default ProjectCarousel;
