import React from "react";
import Dimmed from "./Dimmed";
import classNames from "classnames/bind";
import styles from "../Scss/home.module.scss";

const cx = classNames.bind(styles);

const Greet = () => {
  return (
    <>
      <img
        className={cx("homeImg")}
        // src="https://cdn.pixabay.com/photo/2020/07/04/07/33/laptop-5368570_1280.jpg"
        src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
        alt="배경 이미지"
      />
      <Dimmed />
    </>
  );
};

export default Greet;
