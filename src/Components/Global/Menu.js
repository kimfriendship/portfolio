import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = ({ isHome, menuState }) => {
  return (
    <Wrapper>
      <Nav isHome={isHome}>
        <Link smooth spy hashSpy to="home" activeClass="active" duration={800}>
          HOME
        </Link>
        <Link smooth spy hashSpy to="about" activeClass="active" duration={800}>
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
      <Button></Button>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;

const Nav = styled.nav``;

const Button = styled.button``;
