import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const { pathname: path, hash } = location;
  const isHome = (path === "/" && hash === "#home") || (path === "/" && !hash);

  useEffect(() => {
    console.log(location, isHome);
  }, [isHome, location]);

  return (
    <Background isHome={isHome}>
      <Wrapper>
        <Logo isHome={isHome}>
          <HomeLink href="localhost:3001">kimFriendship</HomeLink>
        </Logo>
        <Nav isHome={isHome}>
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
        </Nav>
      </Wrapper>
    </Background>
  );
};

export default Header;

const Background = styled.header`
  background-color: ${({ isHome }) => (isHome ? "transparent" : "white")};
  box-shadow: ${({ isHome }) => !isHome && "0 0 10px 0 gray"};
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ isHome }) => (isHome ? "white" : "black")};
`;

const HomeLink = styled.a``;

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
`;
