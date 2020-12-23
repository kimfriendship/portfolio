import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Home from "../../Asset/TTT_Home.png";
import Timeline from "../../Asset/TTT_Timeline.png";

const TimeToTravel = () => {
  return (
    <>
      <BigImg src={Home} />
      <SmallImg src={Timeline} />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        pos={{ top: "10rem", left: null, right: 0 }}
      />
    </>
  );
};

export default TimeToTravel;
