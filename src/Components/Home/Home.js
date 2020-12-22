import React from "react";
import Background from "./Background";
import { Section } from "../index";
import Greeting from "./Greeting";

const Home = () => {
  return (
    <>
      <Section id="home" height="100vh">
        <Greeting />
        <Background />
      </Section>
    </>
  );
};

export default Home;
