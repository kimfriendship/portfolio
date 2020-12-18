import React from "react";
import styles from "../Scss/modal.module.scss";
import classNames from "classnames/bind";
import NavButton from "./NavButton";

const cx = classNames.bind(styles);

const ProjectCarousel = ({ state, events }) => {
  const { renderArray, isMovingNext, isMovingBefore } = state;
  const { moveNext, moveBefore } = events;
  console.log(renderArray);
  // console.log(images);
  // if (!images) return null;
  return (
    <div className={cx("carousel")}>
      <NavButton direction={0} event={moveBefore} />
      <NavButton direction={1} event={moveNext} />
      <div className={cx("wrapper")}>
        {renderArray.map(({ src, alt, caption }, i) => (
          <figure
            key={i}
            className={cx(
              "figure",
              `${isMovingBefore && "before"}`,
              `${isMovingNext && "next"}`
            )}
          >
            <img className={cx("image")} src={src} alt={alt} />
            <figcaption className={cx("caption")}>{caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
