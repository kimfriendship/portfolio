import React from "react";
import styled from "styled-components";

const SmallImg = ({ src, position, ...rest }) => {
  return <Img src={src} position={position} {...rest} />;
};

export default SmallImg;

const Img = styled.img`
  width: 50%;
  box-shadow: 0 3px 10px 0 lightgray;
  position: absolute;
  ${({ position }) => position}

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;
