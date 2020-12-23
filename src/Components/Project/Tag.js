import React from "react";
import styled from "styled-components";

const Tag = ({ name, date, position }) => {
  return (
    <Wrapper position={position}>
      <ProjectName>{name}</ProjectName>
      <Line />
      <ProjectDate>{date}</ProjectDate>
    </Wrapper>
  );
};

export default Tag;

const Wrapper = styled.div`
  /* background-color: lavender; */
  ${({ position }) => position}
  position: absolute;
  width: 100%;
  z-index: -10;

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
  font-size: 1.6rem;
`;

const Line = styled.hr`
  width: 100%;
  margin: 1rem 0;
`;
