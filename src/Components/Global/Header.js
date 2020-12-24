import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { debounce } from "lodash";
import Navigation from "./Navigation";
import MenuButtonContainer from "./MenuButtonContainer";

const Header = () => {
  // const [isHome, setIsHome] = useState(null);
  // const viewHeight = window.innerHeight;
  // const offset = window.scrollY;
  // const checkHome = debounce(() => {
  //   setIsHome(offset > viewHeight);
  //   console.log("=====", offset, viewHeight);
  // }, 200);
  // window.addEventListener("scroll", checkHome);

  // const location = useLocation();
  // const { pathname: path, hash } = location;
  // const isHome = (path === "/" && hash === "#home") || (path === "/" && !hash);

  const isHome = true;

  useEffect(() => {
    // console.log(location, isHome);
    console.log(isHome);
    // return () => window.removeEventListener("scroll", checkHome);
  }, []);

  return (
    <Background isHome={isHome}>
      <Wrapper>
        <Logo isHome={isHome}>
          <HomeLink href="localhost:3001">kimFriendship</HomeLink>
        </Logo>
        <Navigation isHome={isHome} />
        <MenuButtonContainer isHome={isHome} />
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
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
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
  font-weight: 600;
  color: ${({ isHome }) => (isHome ? "white" : "black")};
`;

const HomeLink = styled.a``;
