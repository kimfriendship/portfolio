import React from "react";
import { css } from "styled-components";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import Big from "../../Asset/DND_Big.png";
import Small from "../../Asset/DND_Small.png";
import ScrollAnimation from "react-animate-on-scroll";

const Airdnd = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce>
        <BigImg
          src={Big}
          href="http://localhost:3001/project?name=airdnd"
          width="85%"
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce>
        <SmallImg
          href="http://localhost:3001/project?name=airdnd"
          src={Small}
          width="30%"
          position={css`
            bottom: -10rem;
            right: 0;
          `}
        />
      </ScrollAnimation>
      <Tag
        name="airdnd"
        date="2020.08.01 - 2020.09.11"
        // animation="fadeInRight"
        position={{
          bottom: "-8rem",
          left: 0,
        }}
      />
    </>
  );
};

export default Airdnd;
