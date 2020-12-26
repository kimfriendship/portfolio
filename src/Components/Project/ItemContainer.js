import React, { useState } from "react";
import Item from "./Item";

const ItemContainer = ({ itemData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseOver = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Item
      itemData={itemData}
      isHovered={isHovered}
      events={{ onMouseOver, onMouseLeave }}
    />
  );
};

export default ItemContainer;
