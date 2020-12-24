import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";

const MenuButton = ({ isHome, openMenu, menuState }) => {
  return (
    <Button type="button" aria-label="메뉴" isHome={isHome} onClick={openMenu}>
      <Menu size="30" menuState={menuState} />
    </Button>
  );
};

export default MenuButton;

const Button = styled.button`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  width: 3.5rem;
  height: 3.5rem;
  transition: 0.2s ease-in;
  background-color: transparent;
  color: ${({ isHome }) => (isHome ? "white" : "black")};

  &:hover,
  &:focus {
    transition: 0.2s ease-in;
    color: ${({ theme }) => theme.color.point};
  }

  @media ${({ theme }) => theme.size.mobile} {
    display: block;
  }
`;
