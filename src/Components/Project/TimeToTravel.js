import React from "react";
import styled, { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Home from "../../Asset/TTT_Big.png";
import Timeline from "../../Asset/TTT_Small.png";

const TimeToTravel = () => {
  return (
    <>
      <BiggerImg src={Home} />
      <SmallImg
        src={Timeline}
        position={css`
          bottom: -4rem;
          right: 0;
        `}
      />
      <Tag
        name="time-to-travel"
        date="2020.04.20 - 2020.04.24"
        position={css`
          top: 13rem;
          right: 0;
          text-align: right;
        `}
      />
    </>
  );
};

export default TimeToTravel;

const BiggerImg = styled(BigImg)`
  margin-bottom: 10rem;
`;
