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
          <Airdnd />
        </Item>
        <Item>
          <GhostLeg />
        </Item>
        <Item>
          <TimeToTravel />
        </Item>
      </List>
    </Section>
  );
};

export default Project;

const List = styled.ul``;

const Item = styled.li`
  width: 100%;
  position: relative;
  max-height: 700px;
  margin: 10rem 0 15rem;
  /* background-color: lightsteelblue; */

  &:nth-of-type(3) {
    margin-bottom: 0rem;
    /* padding-bottom: 10rem; */
  }

  @media ${({ theme }) => theme.size.mobile} {
    margin: 10rem 0 5rem;
  }
`;
