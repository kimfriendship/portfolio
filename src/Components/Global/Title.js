import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Text>
      {children}
      <Deco />
    </Text>
  );
};

export default Title;

const Text = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  position: relative;
`;

const Deco = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: green;
`;
