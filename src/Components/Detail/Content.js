import React from "react";
import styled from "styled-components";
import Info from "./Info";

const Content = ({ project }) => {
  return (
    <Wrapper>
      <Info project={project} />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  background-color: lavender;
`;
