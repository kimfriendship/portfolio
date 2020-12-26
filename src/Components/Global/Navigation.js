import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navigation = ({ isHome, isDetail }) => {
  const { pathname } = useLocation();
  const isMain = pathname === "/";

  return (
    <Nav isHome={isHome}>
      {isMain ? (
        <>
          <Link
            tabIndex="0"
            smooth
            spy
            hashSpy
            to="home"
            activeClass="activeMenu"
            className={isHome ? "activeMenu" : ""}
            duration={800}
          >
            HOME
          </Link>
          <Link
            tabIndex="0"
            smooth
            spy
            hashSpy
            to="about"
            activeClass="activeMenu"
            duration={800}
          >
            ABOUT
          </Link>
          <Link
            tabIndex="0"
            smooth
            spy
            hashSpy
            to="project"
            activeClass="activeMenu"
            duration={800}
          >
            PROJECT
          </Link>
        </>
      ) : (
        <>
          <NavLink to="/#home">HOME</NavLink>
          <NavLink to="/#about">ABOUT</NavLink>
          <NavLink to="/#project" className={isDetail ? "activeMenu" : ""}>
            PROJECT
          </NavLink>
        </>
      )}
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ isHome }) => (isHome ? "white" : "black")};

  .activeMenu {
    border-bottom: ${({ isHome }) => `2px solid ${isHome ? "white" : "black"}`};

    &::after {
      display: none;
    }
  }

  & * {
    margin-left: 2rem;
    outline: none;
    cursor: pointer;

    &::after {
      display: block;
      content: " ";
      padding: 0.2rem 0;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
      border-bottom: ${({ isHome }) =>
        `2px solid ${isHome ? "white" : "black"}`};
    }

    &:hover:after,
    &:focus:after {
      transform: scaleX(1);
    }
  }

  @media ${({ theme }) => theme.size.mobile} {
    display: none;
  }
`;
