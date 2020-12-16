import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainRouter from "./Router/MainRouter";
import classNames from "classnames/bind";
import styles from "./Scss/app.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <MainRouter />
      <Footer />
    </div>
  );
}

export default App;
