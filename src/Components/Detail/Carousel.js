import React from "react";
import styled, { keyframes, css } from "styled-components";
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
    <Wrapper>
      <NavButton direction={0} event={moveBefore} />
      <Frame>
        {renderArray.map(({ src, alt, caption }, i) => (
          <Figure key={i}>
            <Image
              style={imageStyle}
              src={src}
              alt={alt}
              isMovingNext={isMovingNext}
              isMovingBefore={isMovingBefore}
            />
            <Caption>
              <Indicies>
                {Array.from({ length: count }).map((_, i) => (
                  <Index key={i} isCurrent={currentIdx === i} />
                ))}
              </Indicies>
              <Span>{caption}</Span>
            </Caption>
          </Figure>
        ))}
      </Frame>
      <NavButton direction={1} event={moveNext} />
    </Wrapper>
  );
};

export default Carousel;

const slideBefore = keyframes`
  0% {
    transform: translate3d(-1080px, 0, 0);
    /* transform: translate3d(-600px, 0, 0); */
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const slideNext = keyframes`{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1080px, 0, 0);
    /* transform: translate3d(-600px, 0, 0); */
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

const Frame = styled.div`
  margin: 0 auto;
  width: 90%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
`;

const Figure = styled.figure`
  min-width: 100%;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  ${({ isMovingBefore, isMovingNext }) => {
    if (isMovingBefore)
      return css`
        animation: ${slideBefore} 0.3s forwards;
      `;
    if (isMovingNext)
      return css`
        animation: ${slideNext} 0.3s forwards;
      `;
  }}
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  text-align: center;
  background-color: black;
  opacity: 0.6;
`;

const Span = styled.span`
  font-size: 1.6rem;
  color: white;
`;

const Indicies = styled.ul`
  margin: 0.5rem auto 0.7rem;
  width: 5rem;
  display: flex;
  justify-content: space-between;
`;

const Index = styled.li`
  background-color: ${({ isCurrent }) => (isCurrent ? "white" : "gray")};
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
`;
