import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const Navigation = ({ isHome, isAbout, isProject, isDetail }) => {
  return (
    <Nav isHome={isHome}>
      <NavHashLink
        smooth
        to="/#home"
        activeClassName="active"
        className={`${isHome ? "active" : ""}`}
        tabIndex="3"
      >
        HOME
      </NavHashLink>
      <NavHashLink
        smooth
        to="/#about"
        activeClassName="active"
        className={`${isAbout ? "active" : ""}`}
        tabIndex="4"
      >
        ABOUT
      </NavHashLink>
      <NavHashLink
        smooth
        to="/#project"
        activeClassName="active"
        className={`${isProject || isDetail ? "active" : ""}`}
        tabIndex="5"
      >
        PROJECT
      </NavHashLink>
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

  .active {
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
