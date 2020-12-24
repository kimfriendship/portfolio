import React from "react";
import styled from "styled-components";
import { Title, Section } from "../index";
import ContactList from "./ContactList";
import Heading from "./Heading";
import Intro from "./Intro";
import Image from "./Image";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <Section id="about">
      <Title>ABOUT</Title>
      <ScrollAnimation animateIn="slideInUp" animateOnce>
        <Content>
          <Image />
          <Wrapper>
            <Heading />
            <ContactList />
            <Intro />
          </Wrapper>
        </Content>
      </ScrollAnimation>
    </Section>
  );
};

export default About;

const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
