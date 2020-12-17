import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/about.module.scss";
import profile from "../Asset/boree.jpeg";
import Title from "./Title";
import { Email } from "@styled-icons/material/Email";
import { Github } from "@styled-icons/icomoon/Github";
import { Book } from "@styled-icons/boxicons-regular/Book";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <section className={cx("profileSection")}>
      <Title>PROFILE</Title>
      <div className={cx("introWrapper")}>
        <img
          src={profile}
          alt="김우정 프로필 사진"
          className={cx("profileImg")}
        />
        <div className={cx("intro")}>
          <h4 className={cx("position")}>Front-End Developer</h4>
          <h3 className={cx("name")}>김우정</h3>
          <ul className={cx("contactList")}>
            <li>
              <a
                className={cx("contact")}
                href="mailto:kfriendship94@gmail.com"
              >
                <Email size="20" className={cx("icons")} />
                kfriendship94@gmail.com
              </a>
            </li>
            <li>
              <a
                className={cx("contact")}
                href="https://github.com/kimfriendship"
              >
                <Github size="20" className={cx("icons")} />
                https://github.com/kimfriendship
              </a>
            </li>
            <li>
              <a
                className={cx("contact")}
                href="https://velog.io/@kimfriendship/series"
              >
                <Book size="20" className={cx("icons")} />
                https://velog.io/@kimfriendship/series
              </a>
            </li>
          </ul>
          <span className={cx("detail")}>
            안녕하세요. 처음 웹개발을 접한 뒤 매력에 푹 빠져 하루하루가 다르게
            열심히 알아가는 중입니다. 빠르게 변하는 웹개발 트렌드를 습득하며,
            다양한 시도를 해보고 있습니다. 항상 사용자 입지고 있으며 차차 하나씩
            공부 하고 있습니다. 제가 좋아하는 일, 계속해서 더 잘하고 싶습니다 :
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
