import React from "react";
import styled from "styled-components";

const SmallImg = ({ href, src, position, width }) => {
  return (
    <Link href={href} width={width} position={position}>
      <Img src={src} />
    </Link>
  );
};

export default SmallImg;

const Img = styled.img`
  width: 100%;

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;

const Link = styled.a`
  ${({ position }) => position}
  width: ${({ width }) => width || "50%"};
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
