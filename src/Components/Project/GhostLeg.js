import React from "react";
import { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/GL_Game.png";
import Small from "../../Asset/GL_Small.png";

const GhostLeg = () => {
  return (
    <>
      <BigImg
        animation="fadeInRight"
        src={Big}
        href="http://localhost:3001/project?name=ghost-leg"
        extraStyle={css`
          margin-left: 30%;
        `}
      />
      <SmallImg
        animation="fadeInLeft"
        src={Small}
        href="http://localhost:3001/project?name=ghost-leg"
        position={css`
          bottom: 4rem;
          left: 0;
        `}
      />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        position={{
          top: "15%",
          left: 0,
        }}
      />
    </>
  );
};

export default GhostLeg;
