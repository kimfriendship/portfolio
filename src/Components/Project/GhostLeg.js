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
        alt="ghost-leg 프로젝트 게임 페이지 썸네일"
        href="http://localhost:3001/project?name=ghost-leg"
        extraStyle={css`
          margin-left: 30%;
        `}
      />
      <SmallImg
        animation="fadeInLeft"
        src={Small}
        alt="ghost-leg 프로젝트 결과 페이지 썸네일"
        href="http://localhost:3001/project?name=ghost-leg"
        position={css`
          bottom: 4rem;
          left: 0;
        `}
      />
      <Tag
        name="ghost-leg"
        date="2020.06.20 - 2020.06.29"
        position={{
          top: "15%",
          left: 0,
        }}
      />
    </>
  );
};

export default GhostLeg;
