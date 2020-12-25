import React from "react";
import styled from "styled-components";

const Background = () => {
  return <Overlay />;
};

export default Background;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzRGyU4OOoeCHfnUi6nc_cITqBTvWhK49_g&usqp=CAU");
  background-size: cover;
  background-position: center;
  background-color: black;
`;
