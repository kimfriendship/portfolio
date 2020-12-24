import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const Navigation = ({ isHome }) => {
  const { pathname } = useLocation();
  const isMain = pathname === "/";
  return (
    <Nav isHome={isHome}>
      {isMain ? (
        <>
          <Link
            smooth
            spy
            hashSpy
            to="home"
            activeClass="active"
            duration={800}
          >
            HOME
          </Link>
          <Link
            smooth
            spy
            hashSpy
            to="about"
            activeClass="active"
            duration={800}
          >
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
        </>
      ) : (
        <>
          <Menu href="/#home">HOME</Menu>
          <Menu href="/#about">ABOUT</Menu>
          <Menu href="/#project">PROJECT</Menu>
        </>
      )}
    </Nav>
  );
};

export default Navigation;

const linkStyle = (isHome) => css`
  margin-left: 2rem;
  cursor: pointer;

  &::after {
    display: block;
    content: " ";
    padding: 0.2rem 0;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    border-bottom: ${({ isHome }) => `2px solid ${isHome ? "white" : "black"}`};
  }

  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ isHome }) => (isHome ? "white" : "black")};

  .active {
    border-bottom: ${({ isHome }) => `2px solid ${isHome ? "white" : "black"}`};

    &::after {
      display: none;
    }
  }

  & * {
    ${({ isHome }) => linkStyle(isHome)}
  }

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;

const Menu = styled.a``;
