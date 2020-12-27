import React from "react";
import styled, { css } from "styled-components";
import Pic from "../../Asset/back.png";

const Background = () => {
  return (
    <>
      <Overlay />
      <Img src={Pic} alt="배경" />
    </>
  );
};

export default Background;

const position = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Img = styled.img`
  ${position};
  z-index: -20;
`;

const Overlay = styled.div`
  ${position};
  z-index: -10;
  background-color: black;
  opacity: 0.8;
`;
