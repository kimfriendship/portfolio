import React from "react";
import styled from "styled-components";

const Greeting = () => {
  return (
    <Wrapper>
      <Text size="15.2rem">Hi there.</Text>
      <Text size="7.2rem">I'm Woojung Kim.</Text>
    </Wrapper>
  );
};

export default Greeting;

const Text = styled.span`
  color: white;
  font-size: ${({ size }) => "8rem"};
  font-weight: 700;
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  text-align: center;
`;

const Wrapper = styled.div`
  /* background-color: lavender; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
