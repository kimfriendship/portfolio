import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Title = ({ children }) => {
  return <h2 className={cx("title")}>{children}</h2>;
};

export default Title;
