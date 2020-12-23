import React from "react";
import NavButton from "./NavButton";

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
    <div>
      <NavButton direction={0} event={moveBefore} />
      <NavButton direction={1} event={moveNext} />
      <div>
        {renderArray.map(({ src, alt, caption }, i) => (
          <figure key={i}>
            <img style={imageStyle} src={src} alt={alt} />
            <figcaption>
              <ul>
                {Array.from({ length: count }).map((_, i) => (
                  <li
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
