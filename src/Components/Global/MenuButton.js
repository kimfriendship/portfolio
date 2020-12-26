import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular/Menu";
import MenuContainer from "./MenuContainer";

const MenuButton = ({ isHome, menu }) => {
  const { menuState, openMenu, closeMenu } = menu;
  return (
    <>
      <Button
        type="button"
        aria-label="메뉴 열기"
        isHome={isHome}
        onClick={openMenu}
      >
        <Menu size="30" />
      </Button>
      <MenuContainer menu={{ menuState, closeMenu }} />
    </>
  );
};

export default MenuButton;

const Button = styled.button`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-top: -0.7rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
