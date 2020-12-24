import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Airdnd from "./Airdnd";
import GhostLeg from "./GhostLeg";
import TimeToTravel from "./TimeToTravel";
import { debounce } from "lodash";

const ViewChecker = () => {
  const [viewSize, setViewSize] = useState(window.innerWidth);
  const getViewSize = debounce(() => setViewSize(window.innerWidth), 200);
  window.addEventListener("resize", getViewSize);

  useEffect(() => {
    return () => window.removeEventListener("resize", getViewSize);
  }, []);

  return (
    <>
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
    </>
  );
};

export default ViewChecker;

const List = styled.ul`
  margin-top: 10rem;
`;

const Item = styled.li`
  width: 100%;
  position: relative;
  max-height: 700px;
  margin-bottom: ${({ bottom }) => bottom};

  @media ${({ theme }) => theme.size.mobile} {
    margin-bottom: 20%;
  }
`;
