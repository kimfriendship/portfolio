import React from "react";
import styled from "styled-components";

const Greeting = () => {
  return (
    <Text>
      Hi there!
      <br />
      I'm Woojung Kim
    </Text>
  );
};

export default Greeting;

const Text = styled.span`
  color: white;
  font-size: 6rem;
  font-weight: 700;
`;
