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
      <BigImg
        src={Home}
        href="http://localhost:3001/project?name=time-to-travel"
      />
      <SmallImg
        src={Timeline}
        href="http://localhost:3001/project?name=time-to-travel"
        position={css`
          bottom: -12rem;
          right: 0;
        `}
      />
      <Tag
        name="time-to-travel"
        date="2020.04.20 - 2020.04.24"
        position={css`
          top: 18%;
          right: 0;
          text-align: right;
        `}
      />
    </>
  );
};

export default TimeToTravel;
