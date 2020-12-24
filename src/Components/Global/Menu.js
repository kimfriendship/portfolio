import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Close } from "@styled-icons/evaicons-solid/Close";

const Menu = ({ isHome, menuState, closeMenu }) => {
  if (!menuState) return null;

  return ReactDOM.createPortal(
    <Wrapper>
      <Nav isHome={isHome}>
        <Link smooth spy hashSpy to="home" activeClass="active" duration={800}>
          HOME
        </Link>
        <Link smooth spy hashSpy to="about" activeClass="active" duration={800}>
          ABOUT
        </Link>
        <Link
          smooth
          spy
          hashSpy
          to="project"
          activeClass="active"
          duration={800}
        >
          PROJECT
        </Link>
      </Nav>
      <Button onClick={closeMenu} type="button" aria-label="메뉴 닫기">
        <Close size="30" />
      </Button>
    </Wrapper>,
    document.getElementById("menu")
  );
};

export default Menu;

const Wrapper = styled.div`
  background-color: lightseagreen;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;

  & * {
    cursor: pointer;
    font-size: 5rem;
    font-weight: 600;
    color: white;
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
  top: 1rem;
  right: 1rem;

  &:hover,
  &:focus {
    border: 2px solid white;
  }
`;
