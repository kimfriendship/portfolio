import React, { useState } from "react";
import MenuButton from "./MenuButton";

const MenuButtonContainer = () => {
  const [menuState, setMenuState] = useState(false);
  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);

  return <MenuButton menu={{ menuState, openMenu, closeMenu }} />;
};

export default MenuButtonContainer;
