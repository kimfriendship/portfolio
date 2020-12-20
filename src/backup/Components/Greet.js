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
        src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
        alt="배경 이미지"
      />
      <h2 className={cx("greeting")}>
        <span className={cx("job")}>프론트엔드 개발자</span>
        <span className={cx("name")}>김우정입니다</span>
      </h2>
      <Dimmed zIndex={-10} />
    </>
  );
};

export default Greet;
