import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/GL_Game.png";
import Small from "../../Asset/GL_Small.png";

const GhostLeg = () => {
  return (
    <>
      <BigImg src={Big} />
      <SmallImg src={Small} />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        pos={{ top: "10rem", left: null, right: 0 }}
      />
    </>
  );
};

export default GhostLeg;
