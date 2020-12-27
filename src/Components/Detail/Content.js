import React from "react";
import styled from "styled-components";
import Features from "./Features";
import Info from "./Info";
import Slider from "./Slider";
import TechStack from "./TechStack";

const Content = ({ project }) => {
  const { features, techStack, images, carouselSize: size } = project;

  return (
    <Wrapper>
      <Slider images={images} size={size} />
      <Info project={project} />
      <Features features={features} />
      <TechStack techStack={techStack} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5rem;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
`;
