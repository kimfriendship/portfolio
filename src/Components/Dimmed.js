import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/global.scss";

const cx = classNames.bind(styles);

const Dimmed = () => {
  return <div className={cx("dimmed")}></div>;
};

export default Dimmed;
