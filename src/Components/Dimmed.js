import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Dimmed = ({ closeModal, zIndex }) => {
  return (
    <div className={cx("dimmed")} onClick={closeModal} style={{ zIndex }} />
  );
};

export default Dimmed;
