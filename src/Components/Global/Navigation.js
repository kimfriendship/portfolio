import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navigation = ({ isHome }) => {
  return (
    <Nav isHome={isHome}>
      <Link smooth spy hashSpy to="home" activeClass="active" duration={800}>
        HOME
      </Link>
      <Link smooth spy hashSpy to="about" activeClass="active" duration={800}>
        ABOUT
      </Link>
      <Link smooth spy hashSpy to="project" activeClass="active" duration={800}>
        PROJECT
      </Link>
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
    cursor: pointer;

    &::after {
      display: block;
      content: " ";
      padding: 0.2rem 0;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
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
