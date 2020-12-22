import React from "react";
import styled from "styled-components";

const Heading = () => {
  return (
    <Wrapper>
      <Job>Front-End Developer</Job>
      <Name>김우정</Name>
    </Wrapper>
  );
};

export default Heading;

const Wrapper = styled.h3`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const Job = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

const Name = styled.span`
  font-size: 3rem;
`;
