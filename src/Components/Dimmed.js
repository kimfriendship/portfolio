import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Dimmed = ({ closeModal }) => {
  return <div className={cx("dimmed")} onClick={closeModal}></div>;
};

export default Dimmed;
