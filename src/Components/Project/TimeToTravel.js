import React from "react";
import { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Home from "../../Asset/TTT_Big.png";
import Timeline from "../../Asset/TTT_Small.png";

const TimeToTravel = () => {
  return (
    <>
      <BigImg
        animation="fadeInLeft"
        src={Home}
        alt="time-to-travel 프로젝트 홈 화면 썸네일"
        href="http://localhost:3001/project?name=time-to-travel"
      />
      <SmallImg
        animation="fadeInRight"
        src={Timeline}
        alt="time-to-travel 프로젝트 타임라인 화면 썸네일"
        href="http://localhost:3001/project?name=time-to-travel"
        position={css`
          bottom: -10rem;
          right: 0;
        `}
      />
      <Tag
        name="time-to-travel"
        date="2020.04.20 - 2020.04.24"
        position={{
          top: "18%",
          right: 0,
          textAlign: "right",
        }}
      />
    </>
  );
};

export default TimeToTravel;
