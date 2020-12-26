import React from "react";
import ReactDOM from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-scroll";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Menu = ({ isMain, menuState, closeMenu }) => {
  if (menuState === null) return null;
  return ReactDOM.createPortal(
    <Wrapper menuState={menuState}>
      <Nav>
        {isMain ? (
          <>
            <Link
              onClick={closeMenu}
              smooth
              spy
              hashSpy
              to="home"
              activeClass="active"
              duration={800}
              tabIndex="3"
            >
              HOME
            </Link>
            <Link
              onClick={closeMenu}
              smooth
              spy
              hashSpy
              to="about"
              activeClass="active"
              duration={800}
              tabIndex="4"
            >
              ABOUT
            </Link>
            <Link
              onClick={closeMenu}
              smooth
              spy
              hashSpy
              to="project"
              activeClass="active"
              duration={800}
              tabIndex="5"
            >
              PROJECT
            </Link>
          </>
        ) : (
          <>
            <Anchor onClick={closeMenu} href="/#home" tabIndex="3">
              HOME
            </Anchor>
            <Anchor onClick={closeMenu} href="/#about" tabIndex="4">
              ABOUT
            </Anchor>
            <Anchor onClick={closeMenu} href="/#project" tabIndex="5">
              PROJECT
            </Anchor>
          </>
        )}
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

const linkStyle = css`
  cursor: pointer;
  font-size: 5rem;
  font-weight: 600;
  margin: 2rem 0;
  transition: 0.2s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: 0.2s ease-in;
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
    ${linkStyle}
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

const Anchor = styled.a`
  outline: none;
`;
