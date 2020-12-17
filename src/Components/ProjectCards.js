import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";
import Img from "../Asset/boree.jpeg";

const cx = classNames.bind(styles);

const ProjectCards = () => {
  return (
    <ul className={cx("cardList")}>
      <li className={cx("card")}>
        <img className={cx("cardImg")} src={Img} alt="" />
        {/* <span></span> */}
        ghost leg
      </li>
      <li className={cx("card")}>
        <img className={cx("cardImg")} src={Img} alt="" />
        {/* <span></span> */}
        airdnd
      </li>
      <li className={cx("card")}>
        <img className={cx("cardImg")} src={Img} alt="" />
        {/* <span></span> */}
        time to travel
      </li>
    </ul>
  );
};

export default ProjectCards;
