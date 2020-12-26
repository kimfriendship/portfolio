import React, { useState } from "react";
import Item from "./Item";

const ItemContainer = ({ itemData }) => {
  const [isOver, setIsOver] = useState(false);
  const onMouseOver = () => setIsOver(true);
  const onMouseLeave = () => setIsOver(false);

  return (
    <Item
      itemData={itemData}
      isOver={isOver}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default ItemContainer;
