import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Tag = ({ name, date, position, animation }) => {
  return (
    <ScrollAnimation
      animateIn={animation}
      animateOnce
      style={{ ...position, position: "absolute", width: "100%", zIndex: -100 }}
    >
      <Wrapper>
        <ProjectName>{name}</ProjectName>
        <Line />
        <ProjectDate>{date}</ProjectDate>
      </Wrapper>
    </ScrollAnimation>
  );
};

export default Tag;

const Wrapper = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
    position: static;
  }
`;

const ProjectName = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;

const ProjectDate = styled.span`
  font-size: 1.4rem;
`;

const Line = styled.hr`
  width: 100%;
  margin: 1% 0;
`;
