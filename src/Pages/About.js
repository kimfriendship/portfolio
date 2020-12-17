import React from "react";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import classNames from "classnames/bind";
import styles from "../Scss/about.module.scss";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <main className={cx("mainAbout")}>
      <Profile />
      <Skills />
    </main>
  );
};

export default About;
