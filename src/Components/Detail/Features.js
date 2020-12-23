import React from "react";
import styled from "styled-components";

const Features = ({ features }) => {
  return (
    <>
      <Heading>Features</Heading>
      <List>
        {features.map((feature, i) => (
          <Item key={i}>{feature}</Item>
        ))}
      </List>
    </>
  );
};

export default Features;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 4rem;
`;

const List = styled.ul`
  padding: 0 1rem;
  margin-top: 2rem;
`;

const Item = styled.li`
  line-height: 2.5rem;
  font-size: 1.6rem;
  list-style: "-";
  padding: 0 1rem;
`;
