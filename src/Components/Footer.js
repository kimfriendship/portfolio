import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/global.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      ⓒ Woojung Kim 2020, all rights reserved.
    </footer>
  );
};

export default Footer;
