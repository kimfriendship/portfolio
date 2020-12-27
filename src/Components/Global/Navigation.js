import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Navigation = ({ isHome }) => {
  return (
    <Nav isHome={isHome}>
      <HashLink smooth to="/#home" tabIndex="3">
        HOME
      </HashLink>
      <HashLink smooth to="/#about" tabIndex="4">
        ABOUT
      </HashLink>
      <HashLink smooth to="/#project" tabIndex="5">
        PROJECT
      </HashLink>
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

  /* .active {
    border-bottom: ${({ isHome }) => `2px solid ${isHome ? "white" : "black"}`};

    &::after {
      display: none;
    }
  } */

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
