import React from "react";
import styled from "styled-components";
import Background from "./Background";
import { Section } from "../index";
import Greeting from "./Greeting";
import Image from "./Image";

const Home = () => {
  return (
    <>
      <Section id="home" height="100vh">
        <Greeting />
        <Image
          size="40rem"
          src="https://image.freepik.com/free-vector/young-teenage-woman-uses-laptop-work-chatting-with-friends-flat-cartoon-vector-illustration_102172-416.jpg"
        />
        <Image
          size="20rem"
          src="https://png.pngtree.com/png-clipart/20190121/ourlarge/pngtree-early-summer-cat-illustration-banner-early-summer-cat-illustration-png-image_517697.jpg"
        />
        <Background />
      </Section>
    </>
  );
};

export default Home;
