import React from "react";
import styled from "styled-components";

const Image = ({ size, src, pos }) => {
  return <Img size={size} src={src} pos={pos} />;
};

export default Image;

const Img = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  object-fit: cover;
`;
