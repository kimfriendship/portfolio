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
          <NavHashLink to="/#home" activeStyle={activeStyle}>
            HOME
          </NavHashLink>
          <NavHashLink to="/#about" activeStyle={activeStyle}>
            ABOUT
          </NavHashLink>
          <NavHashLink to="/#project" activeStyle={activeStyle}>
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
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 3rem;
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
