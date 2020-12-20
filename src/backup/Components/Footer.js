import React from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const homeStyle = {
    position: "absolute",
    bottom: "0%",
    left: "0%",
  };

  return (
    <footer className={cx("footer")} style={isHome ? homeStyle : {}}>
      ⓒ Woojung Kim 2020, all rights reserved.
    </footer>
  );
};

export default Footer;
