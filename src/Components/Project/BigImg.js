import React from "react";
import styled from "styled-components";

const BigImg = ({ src, ...rest }) => {
  return <Img src={src} {...rest} />;
};

export default BigImg;

const Img = styled.img`
  box-shadow: 0 3px 10px 0 lightgray;
  width: 75%;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
