import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/DND_Big.png";
import Small from "../../Asset/DND_Small.png";

const Airdnd = () => {
  return (
    <>
      <BiggerImg src={Big} />
      <SmallerImg src={Small} />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        pos={{ top: "10rem", left: null, right: 0 }}
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
