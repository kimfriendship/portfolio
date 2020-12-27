import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const SmallImg = ({ name, src, alt, position, width, animation, events }) => {
  const { onMouseOver, onMouseLeave } = events;

  return (
    <ScrollAnimation animateIn={animation} animateOnce>
      <Wrapper width={width} position={position}>
        <Link
          to={`/project?name=${name}`}
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <Img src={src} alt={alt} />
        </Link>
      </Wrapper>
    </ScrollAnimation>
  );
};

export default React.memo(SmallImg);

const Img = styled.img`
  width: 100%;

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;

const Wrapper = styled.span`
  ${({ position }) => position}
  width: ${({ width }) => width || "45%"};
  box-shadow: 0 3px 10px 0 lightgray;
  cursor: pointer;
  position: absolute;
  outline: none;
  transition: 0.2s ease-in;

  &:hover,
  &:focus {
    transition: 0.2s ease-in;
    transform: scale(1.03);
    box-shadow: 0 3px 10px 0 gray;
  }
`;
