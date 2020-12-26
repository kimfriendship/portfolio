import React from "react";
import { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/DND_Big.png";
import Small from "../../Asset/DND_Small.png";

const Airdnd = () => {
  return (
    <>
      <BigImg
        animation="fadeInLeft"
        src={Big}
        alt="airdnd 프로젝트 리스트형 검색 페이지 썸네일"
        href="http://localhost:3001/project?name=airdnd"
        width="80%"
      />
      <SmallImg
        animation="fadeInRight"
        href="http://localhost:3001/project?name=airdnd"
        src={Small}
        alt="airdnd 프로젝트 카드형 검색 페이지 썸네일"
        width="30%"
        position={css`
          bottom: -10rem;
          right: 0;
        `}
      />
      <Tag
        name="airdnd"
        date="2020.08.01 - 2020.09.11"
        position={{
          bottom: "-8rem",
          left: 0,
        }}
      />
    </>
  );
};

export default Airdnd;
