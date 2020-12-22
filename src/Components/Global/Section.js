import React from "react";
import styled from "styled-components";

const Section = ({ id, height, children }) => {
  return (
    <Container id={id} height={height}>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  height: ${({ height }) => height || "fit-content"};
  padding: 15rem 2rem;
  margin: 0 auto;
  /* background-color: lightgoldenrodyellow; */
`;
