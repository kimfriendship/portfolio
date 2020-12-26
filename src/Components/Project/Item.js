import React from "react";
import Tag from "./Tag";
import BigImg from "./BigImg";
import SmallImg from "./SmallImg";
import styled from "styled-components";

const Item = ({ itemData, isOver, onMouseOver, onMouseLeave }) => {
  const { bigImg, smallImg, tagStyle, name, date, mainStyle } = itemData;

  return (
    <Wrapper bottom={mainStyle.bottom}>
      <BigImg
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        animation={bigImg.animation}
        src={bigImg.src}
        alt={bigImg.slt}
        href={bigImg.href}
        width={bigImg.width}
        extraStyle={bigImg.extraStyle}
      />
      <SmallImg
        animation={smallImg.animation}
        href={smallImg.href}
        src={smallImg.src}
        alt={smallImg.alt}
        width={smallImg.width}
        position={smallImg.position}
      />
      <Tag isOver={isOver} name={name} date={date} position={tagStyle} />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.li`
  width: 100%;
  position: relative;
  max-height: 700px;
  margin-bottom: ${({ bottom }) => bottom};

  @media ${({ theme }) => theme.size.mobile} {
    margin-bottom: 20%;
  }
`;
