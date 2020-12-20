import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/about.module.scss";
import profile from "../Asset/boree.jpeg";
import Title from "./Title";
import { Email } from "@styled-icons/material/Email";
import { Github } from "@styled-icons/icomoon/Github";
import { Book } from "@styled-icons/fa-solid/Book";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <section className={cx("profileSection")}>
      <Title>ABOUT</Title>
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
            <li className={cx("contact")}>
              <TelephoneFill size="20" className={cx("icons")} />
              010 8024 2242
            </li>
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
          <article className={cx("detail")}>
            <p>안녕하세요. 프론트엔드 개발자 김우정입니다.</p>
            <p>
              '만드는 것'과 그것을 '다른 사람들과 나누는 것'에서 가장 큰
              즐거움을 느끼고 성취감을 느낍니다.
              <br />
              프로그래밍을 통해, 만들 수 있는 것의 한계를 조금씩 허물고자
              합니다.
            </p>
            <p>
              항상 기본기를 탄탄히 다지려고 노력하며, 그에 따라 새로운 기술을
              빠르게 습득하는 편입니다.
              <br />
              사용자 경험에 관심이 많고 높은 웹 접근성을 가진 제품을 개발하는데
              기여하고 싶습니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;
