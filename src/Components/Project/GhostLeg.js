import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Game from "../../Asset/GL_Game.png";
import Home from "../../Asset/GL_Home.png";

const GhostLeg = () => {
  return (
    <>
      <BigImg src={Game} />
      <SmallImg src={Home} />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        pos={{ top: "10rem", left: null, right: 0 }}
      />
    </>
  );
};

export default GhostLeg;
