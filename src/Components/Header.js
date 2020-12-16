import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/app.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return <header className={cx("header")}>header</header>;
};

export default Header;
