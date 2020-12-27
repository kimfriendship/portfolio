import React from "react";
import { HashLink } from "react-router-hash-link";
import ReactDOM from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Menu = ({ menuState, closeMenu }) => {
  if (menuState === null) return null;
  return ReactDOM.createPortal(
    <Wrapper menuState={menuState}>
      <Nav>
        <HashLink onClick={closeMenu} smooth to="/#home" tabIndex="3">
          HOME
        </HashLink>
        <HashLink onClick={closeMenu} smooth to="/#about" tabIndex="4">
          ABOUT
        </HashLink>
        <HashLink onClick={closeMenu} smooth to="/#project" tabIndex="5">
          PROJECT
        </HashLink>
      </Nav>
      <Button
        onClick={closeMenu}
        type="button"
        aria-label="메뉴 닫기"
        tabIndex="6"
      >
        <Close size="30" />
      </Button>
    </Wrapper>,
    document.getElementById("menu")
  );
};

export default Menu;

const show = keyframes`
0% {
  transform: translate3d(100vw, 0, 0);
}
100% {
  transform: translate3d(0, 0, 0);
}
`;

const hide = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}
100% {
  transform: translate3d(100vw, 0, 0);
}
`;

const Wrapper = styled.div`
  background-color: lightseagreen;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  ${({ menuState }) =>
    menuState
      ? css`
          animation: ${show} 0.2s forwards;
        `
      : css`
          animation: ${hide} 0.2s forwards;
        `}
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;

  & * {
    cursor: pointer;
    outline: none;
    font-size: 5rem;
    font-weight: 600;
    margin: 2rem 0;
    transition: 0.2s ease-in;

    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: 0.2s ease-in;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:hover,
  &:focus {
    border: 2px solid white;
  }
`;
