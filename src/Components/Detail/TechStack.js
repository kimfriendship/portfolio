import React from "react";
import styled from "styled-components";

const TechStack = ({ techStack }) => {
  return (
    <>
      <Heading>Tech Stack</Heading>
      <List>
        {techStack.map((tech, i) => (
          <Item key={i}>
            {tech}
            {i === techStack.length - 1 ? "" : ","}
          </Item>
        ))}
      </List>
    </>
  );
};

export default TechStack;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 4rem;
`;

const List = styled.ul`
  margin-top: 1.5rem;
  font-size: 1.6rem;
  display: flex;
`;

const Item = styled.li`
  margin-left: 1rem;
`;
