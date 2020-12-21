import React from "react";
import styled from "styled-components";
import { Title } from "../Components";

const About = () => {
  return (
    <Main id="about">
      <Title>ABOUT</Title>
    </Main>
  );
};

export default About;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 15rem;
`;
