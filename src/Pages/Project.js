import React from "react";
import styled from "styled-components";
import { Title } from "../Components";

const Project = () => {
  return (
    <Main id="project">
      <Title>PROJECT</Title>
    </Main>
  );
};

export default Project;

const Main = styled.main`
  width: 100%;
  padding-top: 15rem;
  height: 200vh;
`;
