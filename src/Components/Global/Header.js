import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import MenuButtonContainer from "./MenuButtonContainer";

const Header = ({ isHome, isDetail }) => {
  return (
    <Background isHome={isHome}>
      <Wrapper>
        <Logo isHome={isHome}>
          <HomeLink isHome={isHome} href="http://localhost:3001">
            kimFriendship
          </HomeLink>
        </Logo>
        <Navigation isHome={isHome} isDetail={isDetail} />
        <MenuButtonContainer isHome={isHome} />
      </Wrapper>
    </Background>
  );
};

export default React.memo(Header);

const Background = styled.header`
  background-color: ${({ isHome }) => (isHome ? "transparent" : "white")};
  box-shadow: ${({ isHome }) => !isHome && "0 0 10px 0 gray"};
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto -0.5rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ isHome }) => (isHome ? "white" : "black")};
`;

const HomeLink = styled.a`
  outline: none;
  transition: 0.2s ease-in;

  &::after {
    display: block;
    content: " ";
    padding: 0.2rem 0;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    border-bottom: ${({ isHome }) => `2px solid ${isHome ? "white" : "black"}`};
  }

  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
  }
`;
