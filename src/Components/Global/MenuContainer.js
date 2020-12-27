import React from "react";
import Menu from "./Menu";

const MenuContainer = ({ menu }) => {
  const { menuState, closeMenu } = menu;

  if (!menu) return null;
  return <Menu menuState={menuState} closeMenu={closeMenu} />;
};

export default MenuContainer;
