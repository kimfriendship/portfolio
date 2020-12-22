import React from "react";
import styled from "styled-components";

const BigImg = ({ src }) => {
  return <Img src={src} />;
};

export default BigImg;

const Img = styled.img`
  box-shadow: 0 3px 10px 0 lightgray;
  width: 75%;
  position: absolute;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    position: static;
    margin-bottom: 2rem;
  }
`;
