import React, { useState } from "react";
import MenuButton from "./MenuButton";

const MenuButtonContainer = ({ isHome }) => {
  const [menuState, setMenuState] = useState(null);
  const openMenu = () => setMenuState(true);
  const closeMenu = () => {
    setMenuState(false);
    setTimeout(() => setMenuState(null), 300);
  };

  return (
    <MenuButton isHome={isHome} menu={{ menuState, openMenu, closeMenu }} />
  );
};

export default MenuButtonContainer;
