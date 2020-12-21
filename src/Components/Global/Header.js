import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const activeStyle = { borderBottom: "2px solid black" };

const Header = () => {
  return (
    <Background>
      <Wrapper>
        <Logo>
          <HomeLink href="localhost:3001/#home">kimFriendship</HomeLink>
        </Logo>
        <Nav>
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
  background-color: lavender;
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  top: 0;
  left: 0;
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
`;

const HomeLink = styled.a``;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 600;

  & * {
    padding: 0.2rem 0;
    margin-left: 2rem;
  }
`;
