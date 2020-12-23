import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Home from "../../Asset/DND_Map.png";
import Cards from "../../Asset/DND_Cards.png";

const Airdnd = () => {
  return (
    <>
      <BigImg src={Home} />
      <SmallImg src={Cards} />
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        pos={{ top: "10rem", left: null, right: 0 }}
      />
    </>
  );
};

export default Airdnd;
