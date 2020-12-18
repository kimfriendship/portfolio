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
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Webpack } from "@styled-icons/simple-icons/Webpack";
import { colors } from "../Data/data";

const cx = classNames.bind(styles);

const Skills = () => {
  return (
    <section className={cx("skillSection")}>
      <Title>SKILLS</Title>
      <ul className={cx("skillList")}>
        <li className={cx("skill")} style={{ backgroundColor: colors.html5 }}>
          <Html5 size="25" className={cx("icons")} />
          <span>HTML5</span>
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.css3 }}>
          <Css3 size="25" className={cx("icons")} />
          <span>CSS3</span>
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.js }}>
          <Javascript size="25" className={cx("icons")} />
          <span>JavaScript</span>
        </li>
      </ul>
      <ul className={cx("skillList")}>
        <li className={cx("skill")} style={{ backgroundColor: colors.react }}>
          <ReactLogo size="25" className={cx("icons")} />
          <span>React.js</span>
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.redux }}>
          <Redux size="25" className={cx("icons")} />
          <span>Redux</span>
        </li>
        <li
          className={cx("skill")}
          style={{ backgroundColor: colors.styledComponents }}
        >
          <StyledComponents size="25" className={cx("icons")} />
          <span>Styled-Components</span>
        </li>
      </ul>
      <ul className={cx("skillList")}>
        <li className={cx("skill")} style={{ backgroundColor: colors.webpack }}>
          <Webpack size="25" className={cx("icons")} />
          <span>Webpack</span>
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.figma }}>
          <Figma size="25" className={cx("icons")} />
          <span>Figma</span>
        </li>
        <li className={cx("skill")} style={{ backgroundColor: colors.git }}>
          <Git size="25" className={cx("icons")} />
          <span>Git</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
