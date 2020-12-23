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
  width: 100%;
  ${({ position }) => position}
  position: absolute;

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
