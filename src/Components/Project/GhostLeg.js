import React from "react";
import styled, { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/GL_Game.png";
import Small from "../../Asset/GL_Small.png";
import ScrollAnimation from "react-animate-on-scroll";

const GhostLeg = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInRight" animateOnce>
        <BigImg
          src={Big}
          href="http://localhost:3001/project?name=ghost-leg"
          extraStyle={css`
            margin-left: calc(100% / 4);
          `}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <SmallImg
          src={Small}
          href="http://localhost:3001/project?name=ghost-leg"
          position={css`
            bottom: 4rem;
            left: 0;
          `}
        />
      </ScrollAnimation>
      <Tag
        name="ghost-leg"
        date="2020.06.24 - 2020.06.31"
        position={css`
          top: 15%;
          left: 0;
          z-index: -100;
        `}
      />
    </>
  );
};

export default GhostLeg;
