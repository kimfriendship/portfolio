import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import data from "../../Data/data";

const List = () => {
  return (
    <Wrapper>
      {data.map((project) => {
        const {
          id,
          bigImg,
          smallImg,
          tagStyle,
          name,
          date,
          mainStyle,
        } = project;
        return (
          <ItemContainer
            key={id}
            itemData={{ bigImg, smallImg, tagStyle, name, date, mainStyle }}
          />
        );
      })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.ul`
  margin-top: 10rem;
`;
