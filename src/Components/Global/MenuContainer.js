import React from "react";
import Menu from "./Menu";

const MenuContainer = ({ menu }) => {
  if (!menu) return null;
  const { menuState, closeMenu } = menu;

  return <Menu menuState={menuState} closeMenu={closeMenu} />;
};

export default MenuContainer;
