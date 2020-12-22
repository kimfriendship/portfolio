import React from "react";
import styled from "styled-components";
import { Title, Section } from "../index";
import ContactList from "./ContactList";
import Heading from "./Heading";
import Intro from "./Intro";
import Image from "./Image";

const About = () => {
  return (
    <Section id="about">
      <Title>ABOUT</Title>
      <Content>
        <Image />
        <Wrapper>
          <Heading />
          <ContactList />
          <Intro />
        </Wrapper>
      </Content>
    </Section>
  );
};

export default About;

const Content = styled.div`
  margin-top: 10rem;
  display: flex;

  @media ${({ theme }) => theme.size.mobile} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
