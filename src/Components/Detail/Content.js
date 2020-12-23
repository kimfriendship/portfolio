import React from "react";
import styled from "styled-components";
import CarouselContainer from "./CarouselContainer";
import Features from "./Features";
import Info from "./Info";
import TechStack from "./TechStack";

const Content = ({ project }) => {
  const { features, techStack, images } = project;

  return (
    <Wrapper>
      <CarouselContainer images={images} />
      <Block>
        <Info project={project} />
        <Features features={features} />
        <TechStack techStack={techStack} />
      </Block>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  background-color: lavender;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
`;

const Block = styled.div``;
