import React, { useState } from "react";
import MenuButton from "./MenuButton";

const MenuButtonContainer = () => {
  const [menuState, setMenuState] = useState(false);
  const openMenu = () => setMenuState(true);

  return <MenuButton menuState={menuState} openMenu={openMenu} />;
};

export default MenuButtonContainer;
