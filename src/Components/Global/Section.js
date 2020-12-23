import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Section = ({ id, children, height }) => {
  const { pathname } = useLocation();
  const isDetail = pathname.includes("/project");

  return (
    <Container id={id} height={height} isDetail={isDetail}>
      {children}
    </Container>
  );
};

export default Section;

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  height: ${({ height }) => height || "fit-content"};
  padding: 15rem 0;
  padding: ${({ isDetail }) => (isDetail ? "11rem 0" : "15rem 0")};
  margin: 0 auto;
`;
