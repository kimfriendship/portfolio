import React from "react";
import MainRouter from "./Router/mainRouter";
import { HeaderContainer, Footer } from "./Components";

function App() {
  return (
    <>
      <HeaderContainer />
      <MainRouter />
      <Footer />
    </>
  );
}

export default App;
