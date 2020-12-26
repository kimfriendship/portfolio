import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Tag = ({ isHovered, name, date, position }) => {
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
      delay={isMobile ? 300 : 500}
      style={isMobile ? mobileStyle : pcStyle}
    >
      <Wrapper>
        <ProjectName isHovered={isHovered}>
          {isHovered ? "Click to Explore" : name}
        </ProjectName>
        <Line isHovered={isHovered} />
        <ProjectDate isHovered={isHovered}>
          {isHovered ? name : date}
        </ProjectDate>
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
  color: ${({ isHovered, theme }) => (isHovered ? theme.color.point : "black")};
`;

const ProjectDate = styled.span`
  color: ${({ isHovered, theme }) => (isHovered ? theme.color.point : "black")};
  font-size: 1.4rem;
`;

const Line = styled.hr`
  border-top: ${({ isHovered, theme }) => `0.1px solid 
    ${isHovered ? theme.color.point : ""}`};
  width: 100%;
  margin: 0.8rem 0;

  @media ${({ theme }) => theme.size.mobile} {
    margin: 1% 0;
  }
`;
