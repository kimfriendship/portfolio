import React from "react";
import { NavigateBefore } from "@styled-icons/material-rounded/NavigateBefore";
import { NavigateNext } from "@styled-icons/material-rounded/NavigateNext";
import styles from "../Scss/modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavButton = ({ direction, event }) => {
  return (
    <button
      type="button"
      onClick={event}
      className={cx("btn", "navBtn")}
      aria-label={direction ? "다음 사진으로 이동" : "이전 사진으로 이동"}
      style={direction ? { right: 0 } : { left: 0 }}
    >
      {direction ? <NavigateNext size="40" /> : <NavigateBefore size="40" />}
    </button>
  );
};

export default NavButton;
