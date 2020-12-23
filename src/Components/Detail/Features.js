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
`;

const List = styled.ul``;

const Item = styled.li`
  font-size: 1.6rem;
`;
