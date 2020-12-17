import React from "react";
import Greet from "../Components/Greet";
import classNames from "classnames/bind";
import styles from "../Scss/global.scss";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx("main")}>
      <Greet />
    </main>
  );
};

export default Home;
