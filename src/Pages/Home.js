import React from "react";
import About from "../Components/About";
import Skills from "../Components/Skills";
import classNames from "classnames/bind";
import styles from "../Scss/home.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("main")}>
      <About />
      <Skills />
    </main>
  );
};

export default Home;
