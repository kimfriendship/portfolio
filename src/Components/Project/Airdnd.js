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
      <BiggerImg src={Big} />
      <SmallerImg
        src={Small}
        position={css`
          bottom: 0;
          right: 0;
        `}
      />
      <Tag
        name="airdnd"
        date="2020.08.01 - 2020.09.11"
        position={css`
          bottom: 2rem;
          left: 0;
        `}
      />
    </>
  );
};

export default Airdnd;

const BiggerImg = styled(BigImg)`
  width: 85%;
  margin-bottom: 10rem;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
  }
`;

const SmallerImg = styled(SmallImg)`
  width: 30%;
`;
