import React, { forwardRef } from "react";
import styled, { keyframes, css } from "styled-components";
import NavButton from "./NavButton";

const Carousel = forwardRef(({ state, size, events, frameWidth }, ref) => {
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
      <Frame size={size}>
        <FigureList
          ref={ref}
          frameWidth={frameWidth}
          isMovingNext={isMovingNext}
          isMovingBefore={isMovingBefore}
        >
          {renderArray.map(({ src, alt, caption }, i) => (
            <Figure key={i} frameWidth={frameWidth}>
              <Image src={src} alt={alt} />
            </Figure>
          ))}
        </FigureList>
        <Indicies>
          {Array.from({ length: count }).map((_, i) => (
            <Index key={i} isCurrent={currentIdx === i} />
          ))}
        </Indicies>
      </Frame>
      <NavButton direction={1} event={moveNext} />
    </Wrapper>
  );
});

export default Carousel;

const slideBefore = (width) => keyframes`
  0% {
    transform: ${`translate3d(-${width}px, 0, 0)`};
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
  `;

const slideNext = (width) => keyframes`{
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: ${`translate3d(-${width}px, 0, 0)`};
  }
  `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

const Frame = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 0;
  padding-bottom: ${({ size }) => size.paddingBottom};
  margin: 0 auto;
  border-radius: 10px;
  /* background-color: lightgray; */
`;

const FigureList = styled.ul`
  display: flex;
  position: absolute;
  ${({ isMovingBefore, isMovingNext, frameWidth }) => {
    if (isMovingBefore)
      return css`
        animation: ${slideBefore(frameWidth)} 0.3s forwards;
      `;
    if (isMovingNext)
      return css`
        animation: ${slideNext(frameWidth)} 0.3s forwards;
      `;
  }}
`;

const Figure = styled.li`
  min-width: 100%;
  width: 100%;
  height: ${({ frameWidth }) => `${frameWidth * 0.55}px`};
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Indicies = styled.ul`
  position: absolute;
  bottom: 0;
  height: 5%;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.size.mobile} {
    height: 8%;
  }
`;

const Index = styled.li`
  background-color: ${({ isCurrent }) => (isCurrent ? "white" : "gray")};
  border: ${({ isCurrent }) => `1px solid ${isCurrent ? "lightgray" : "none"}`};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin: 0 0.5rem;

  @media ${({ theme }) => theme.size.mobile} {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
