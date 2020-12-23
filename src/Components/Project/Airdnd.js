import React from "react";
import styled, { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/DND_Big.png";
import Small from "../../Asset/DND_Small.png";

const Airdnd = () => {
  return (
    <>
      <BigImg src={Big} href="http://localhost:3001/#about" width="85%" />
      <SmallImg
        href="http://localhost:3001/"
        src={Small}
        width="30%"
        position={css`
          bottom: -10rem;
          right: 0;
        `}
      />
      <Tag
        name="airdnd"
        date="2020.08.01 - 2020.09.11"
        position={css`
          bottom: -8rem;
          left: 0;
        `}
      />
    </>
  );
};

export default Airdnd;
