import React from "react";
import styled, { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/GL_Game.png";
import Small from "../../Asset/GL_Small.png";

const GhostLeg = () => {
  return (
    <>
      <BiggerImg src={Big} />
      <SmallImg
        src={Small}
        position={css`
          bottom: 4rem;
          left: 0;
        `}
      />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        position={css`
          top: 15%;
          left: 0;
        `}
      />
    </>
  );
};

export default GhostLeg;

const BiggerImg = styled(BigImg)`
  margin-left: 30%;

  @media ${({ theme }) => theme.size.mobile} {
    margin-left: 0;
  }
`;
