import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../Scss/app.scss";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <h1 className={cx("logo")}>kimfriendship</h1>
      <nav>
        <NavLink
          to="/"
          exact
          activeClassName={cx("activeMenu")}
          className={cx("menu")}
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          activeClassName={cx("activeMenu")}
          className={cx("menu")}
        >
          Project
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
