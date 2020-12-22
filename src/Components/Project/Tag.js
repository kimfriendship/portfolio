import React from "react";
import styled from "styled-components";

const Tag = ({ name, date, pos }) => {
  return (
    <Wrapper pos={pos || {}}>
      <ProjectName>{name}</ProjectName>
      <Line />
      <ProjectDate>{date}</ProjectDate>
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  background-color: lavender;
  position: absolute;
  top: ${({ pos }) => pos.top || 0};
  left: ${({ pos }) => pos.left || ""};
  right: ${({ pos }) => pos.right || ""};
  text-align: ${({ pos }) => (pos.left === 0 ? "left" : "right")};
  width: 50%;
`;

const ProjectName = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;

const ProjectDate = styled.span`
  font-size: 1.6rem;
`;

const Line = styled.hr`
  width: 100%;
  margin: 1rem 0;
`;
