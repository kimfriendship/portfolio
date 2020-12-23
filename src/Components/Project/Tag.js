import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Tag = ({ name, date, position }) => {
  const viewPort = window.innerWidth;
  const isMobile = viewPort <= 700;
  const mobileStyle = { position: "static" };
  const pcStyle = {
    ...position,
    position: "absolute",
    width: "100%",
    zIndex: -100,
  };

  return (
    <ScrollAnimation
      animateIn="flipInX"
      animateOnce
      delay={isMobile ? 300 : 800}
      style={isMobile ? mobileStyle : pcStyle}
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
