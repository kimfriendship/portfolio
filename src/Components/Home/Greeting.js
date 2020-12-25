import React from "react";
import styled from "styled-components";

const Greeting = () => {
  return (
    <Wrapper>
      <Text size="15.2rem">Hi there</Text>
      <Text size="7.2rem">I'm Woojung Kim</Text>
      <Text size="">Front-End Developer</Text>
    </Wrapper>
  );
};

export default Greeting;

const Text = styled.span`
  color: white;
  font-size: ${({ size }) => "3rem"};
  font-weight: 700;
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  padding-top: 40vh;
`;
