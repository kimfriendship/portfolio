import React from "react";
import styled from "styled-components";

const SmallImg = ({ src }) => {
  return <Img src={src} />;
};

export default SmallImg;

const Img = styled.img`
  box-shadow: 0 3px 10px 0 lightgray;
  width: 40%;
  position: absolute;
  /* height: 30rem;
  object-fit: cover; */

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;
