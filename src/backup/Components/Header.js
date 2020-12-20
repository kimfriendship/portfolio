import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "../Scss/global.module.scss";

const cx = classNames.bind(styles);

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const style = { backgroundColor: "black", opacity: "0.7" };

  return (
    <header className={cx("header")} style={isHome ? {} : style}>
      <div className={cx("headerWrapper")}>
        <h1>
          <a className={cx("logo")} href="localhost:3000">
            kimfriendship
          </a>
        </h1>
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName={cx("activeMenu")}
            className={cx("menu")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={cx("activeMenu")}
            className={cx("menu")}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/project"
            activeClassName={cx("activeMenu")}
            className={cx("menu")}
          >
            PROJECT
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
