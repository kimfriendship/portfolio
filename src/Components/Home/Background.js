import React from "react";
import styled from "styled-components";

const Background = () => {
  return <Overlay></Overlay>;
};

export default Background;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg");
  background-size: cover;
`;
