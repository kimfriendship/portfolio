import React from "react";
import styled from "styled-components";

const SmallImg = ({ src, ...rest }) => {
  return <Img src={src} {...rest} />;
};

export default SmallImg;

const Img = styled.img`
  width: 50%;
  box-shadow: 0 3px 10px 0 lightgray;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;
