import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const SmallImg = ({ href, src, alt, position, width, animation }) => {
  return (
    <ScrollAnimation animateIn={animation} animateOnce>
      <Link href={href} width={width} position={position}>
        <Img src={src} alt={alt} />
      </Link>
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

const Link = styled.a`
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
