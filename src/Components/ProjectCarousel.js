import React from "react";
import styles from "../Scss/project.module.scss";
import classNames from "classnames/bind";
import NavButton from "./NavButton";

const cx = classNames.bind(styles);

const ProjectCarousel = ({ images, events }) => {
  const { moveNext, moveBefore } = events;
  // console.log(images);
  // if (!images) return null;
  return (
    <div className={cx("carousel")}>
      <NavButton direction={0} event={moveBefore} />
      <NavButton direction={1} event={moveNext} />
      <div className={cx("wrapper")}>
        {images.map(({ src, alt, caption }, i) => (
          <figure key={i} className={cx("figure")}>
            <img className={cx("image")} src={src} alt={alt} />
            <figcaption className={cx("caption")}>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
