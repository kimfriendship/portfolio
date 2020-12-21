import React from "react";
import styled from "styled-components";

const Background = () => {
  return (
    <Image src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"></Image>
  );
};

export default Background;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 7rem);
  background-color: black;
`;
