import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/about.module.scss";
import Title from "./Title";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { Git } from "@styled-icons/boxicons-logos/Git";

const cx = classNames.bind(styles);

const colors = {
  html5: "#E24F27",
  css3: "#1472B6",
  js: "#EFC332",
  react: "#44B8D8",
  redux: "#764ABC",
  StyledComponents: "#DB7091",
  git: "#EF5132",
};

const Skills = () => {
  return (
    <section className={cx("skillSection")}>
      <Title>SKILLS</Title>
      <ul className={cx("skillList")}>
        <li className={cx("skill")} style={{ backgroundColor: colors.html5 }}>
          <Html5 size="30" className={cx("icons")} />
          HTML5
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.css3 }}>
          <Css3 size="30" className={cx("icons")} />
          CSS3
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.js }}>
          <Javascript size="30" className={cx("icons")} />
          JavaScript
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.react }}>
          <ReactLogo size="30" className={cx("icons")} />
          React.js
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.redux }}>
          <Redux size="30" className={cx("icons")} />
          Redux
        </li>
        <li
          className={cx("skill")}
          style={{ backgroundColor: colors.StyledComponents }}
        >
          <StyledComponents size="30" className={cx("icons")} />
          Styled-Components
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.git }}>
          <Git size="30" className={cx("icons")} />
          Git
        </li>
      </ul>
    </section>
  );
};

export default Skills;
