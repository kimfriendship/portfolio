import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const BigImg = ({ href, src, alt, width, extraStyle, animation, events }) => {
  const { onMouseOver, onMouseLeave } = events;

  return (
    <ScrollAnimation animateIn={animation} animateOnce>
      <Link
        href={href}
        width={width}
        extraStyle={extraStyle}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <Img src={src} alt={alt} />
      </Link>
    </ScrollAnimation>
  );
};

export default React.memo(BigImg);

const Img = styled.img`
  width: 100%;

  @media ${({ theme }) => theme.size.mobile} {
    margin: 0;
  }
`;

const Link = styled.a`
  cursor: pointer;
  outline: none;
  transition: 0.2s ease-in;
  display: block;
  box-shadow: 0 3px 10px 0 lightgray;
  width: ${({ width }) => (width ? width : "70%")};
  ${({ extraStyle }) => extraStyle};

  &:hover,
  &:focus {
    transition: 0.2s ease-in;
    transform: scale(1.03);
    box-shadow: 0 3px 10px 0 gray;
  }

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    margin: 0 0 2rem 0;
  }
`;
