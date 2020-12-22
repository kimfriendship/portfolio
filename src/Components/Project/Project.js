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
        <Item>
          <GhostLeg />
        </Item>
        <Item>
          <Airdnd />
        </Item>
        <Item>
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
  position: relative;
  width: 100%;
  /* background-color: lavender; */
`;
