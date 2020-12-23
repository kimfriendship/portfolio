import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Foot>ⓒ Woojung Kim 2020, all rights reserved.</Foot>;
};

export default Footer;

const Foot = styled.footer`
  width: 100%;
  font-size: 1.3rem;
  text-align: center;
  height: 4rem;
  line-height: 4rem;
`;
