import React from "react";
import styled from "styled-components";
import Features from "./Features";
import Info from "./Info";

const Content = ({ project }) => {
  const { features, techStack, images } = project;

  return (
    <Wrapper>
      <Info project={project} />
      <Features features={features} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  background-color: lavender;
`;
