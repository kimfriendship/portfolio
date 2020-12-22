import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Text>
      {children}
      <Deco></Deco>
    </Text>
  );
};

export default Title;

const Text = styled.h2`
  width: fit-content;
  margin: 0 auto;
  font-size: 3.5rem;
  font-weight: 600;
  position: relative;
`;

const Deco = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  left: -15%;
  width: 130%;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.color.point};
  opacity: 0.5;
  z-index: -10;
`;
