import React from "react";
import styles from "../Scss/modal.module.scss";
import classNames from "classnames/bind";
import NavButton from "./NavButton";

const cx = classNames.bind(styles);

const Carousel = ({ state, imageStyle, events }) => {
  const {
    renderArray,
    isMovingNext,
    isMovingBefore,
    count,
    currentIdx,
  } = state;
  const { moveNext, moveBefore } = events;

  if (!count) return null;
  return (
    <div className={cx("carousel")}>
      <NavButton direction={0} event={moveBefore} />
      <NavButton direction={1} event={moveNext} />
      <div className={cx("figureWrapper")}>
        {renderArray.map(({ src, alt, caption }, i) => (
          <figure
            key={i}
            className={cx(
              "figure",
              `${isMovingBefore && "before"}`,
              `${isMovingNext && "next"}`
            )}
          >
            <img
              className={cx("image")}
              style={imageStyle}
              src={src}
              alt={alt}
            />
            <figcaption className={cx("caption")}>
              <ul className={cx("indexList")}>
                {Array.from({ length: count }).map((_, i) => (
                  <li
                    className={cx("index")}
                    key={i}
                    style={{
                      backgroundColor: `${
                        currentIdx === i ? "white" : "black"
                      }`,
                    }}
                  />
                ))}
              </ul>
              <span>{caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
