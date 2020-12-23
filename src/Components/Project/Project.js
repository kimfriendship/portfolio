import React from "react";
import styled from "styled-components";
import { Title, Section } from "../index";
import Airdnd from "./Airdnd";
import GhostLeg from "./GhostLeg";
import TimeToTravel from "./TimeToTravel";

const Project = () => {
  return (
    <Section id="project">
      <Title>PROJECT</Title>
      <List>
        <Item bottom="30rem">
          <Airdnd />
        </Item>
        <Item bottom="20rem">
          <GhostLeg />
        </Item>
        <Item bottom="10rem">
          <TimeToTravel />
        </Item>
      </List>
    </Section>
  );
};

export default Project;

const List = styled.ul`
  margin-top: 10rem;
`;

const Item = styled.li`
  width: 100%;
  position: relative;
  max-height: 700px;
  margin-bottom: ${({ bottom }) => bottom};
  /* background-color: lightsteelblue; */

  @media ${({ theme }) => theme.size.mobile} {
    margin-bottom: 10rem;
  }
`;
