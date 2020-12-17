import React from "react";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import classNames from "classnames/bind";
import styles from "../Scss/global.scss";

const cx = classNames.bind(styles);

const About = () => {
  return (
    <div>
      about
      <h2 className={cx("title")}>
        안녕하세요.
        <br />
        프론트엔드 개발자 김우정입니다.
      </h2>
      <Profile />
      <Skills />
    </div>
  );
};

export default About;
