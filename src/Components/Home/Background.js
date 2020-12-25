import React from "react";
import styled from "styled-components";

const Background = () => {
  return <Overlay />;
};

export default Background;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  /* background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://cdn.pixabay.com/photo/2019/03/05/20/35/cat-4037008_1280.jpg");
  background-size: cover; */
  background-color: black;
`;
