import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainRouter from "./Router/MainRouter";

function App() {
  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  );
}

export default App;
