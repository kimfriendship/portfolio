import React from "react";
import styled from "styled-components";

const BigImg = ({ href, src, width, extraStyle }) => {
  return (
    <Link href={href} width={width} extraStyle={extraStyle}>
      <Img src={src} />
    </Link>
  );
};

export default BigImg;

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
  width: ${({ width }) => (width ? width : "75%")};
  ${({ extraStyle }) => extraStyle};

  &:hover,
  &:focus {
    transition: 0.2s ease-in;
    transform: scale(1.03);
    box-shadow: 0 3px 10px 0 gray;
  }

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
