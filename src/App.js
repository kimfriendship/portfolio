import React from "react";
import MainRouter from "./Router/mainRouter";
import { Header, Footer } from "./Components";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";

function App() {
  return (
    <>
      <Header />
      {/* <MainRouter /> */}
      <Home />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
