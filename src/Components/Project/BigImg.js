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
`;
