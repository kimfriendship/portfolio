import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

const MenuContainer = ({ menu }) => {
  const { pathname } = useLocation();
  const isMain = pathname === "/";
  const { menuState, closeMenu } = menu;

  if (!menu) return null;
  return <Menu isMain={isMain} menuState={menuState} closeMenu={closeMenu} />;
};

export default MenuContainer;
