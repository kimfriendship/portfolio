import React from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  // const isHome = ["/", "/#home"].includes(location.pathname);
  const isHome = false;
  const activeStyle = {
    borderBottom: `2px solid ${isHome ? "white" : "black"}`,
  };

  return (
    <Background isHome={isHome}>
      <Wrapper>
        <Logo isHome={isHome}>
          <HomeLink href="localhost:3001">kimFriendship</HomeLink>
        </Logo>
        <Nav isHome={isHome}>
          <NavHashLink smooth to="/#home" activeStyle={activeStyle}>
            HOME
          </NavHashLink>
          <NavHashLink smooth to="/#about" activeStyle={activeStyle}>
            ABOUT
          </NavHashLink>
          <NavHashLink smooth to="/#project" activeStyle={activeStyle}>
            PROJECT
          </NavHashLink>
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

  & * {
    padding: 0.2rem 0;
    margin-left: 2rem;
  }
`;
