import React from "react";
import classNames from "classnames/bind";
import styles from "../Scss/home.scss";
import profile from "../Asset/boree.jpeg";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <section className={cx("profile")}>
      <img
        src={profile}
        alt="김우정 프로필 사진"
        className={cx("profileImg")}
      />
      <div className={cx("intro")}>
        <span>
          안녕하세요 프론트엔드 개발자 남은경입니다. 처음 웹개발을 접한 뒤
          매력에 푹 빠져 하루하루가 다르게 열심히 알아가는 중입니다. 빠르게
          변하는 웹개발 트렌드를 습득하며, 다양한 시도를 해보고 있습니다. 항상
          사용자 입장에서 생각하고, 더 나은 방향으로 가기위해 고민하고 또
          고민합니다. 현재는 프론트엔드 개발자를 넘어 풀스텍 개발에도 큰 관심을
          가지고 있으며 차차 하나씩 공부 하고 있습니다. 제가 좋아하는 일,
          계속해서 더 잘하고 싶습니다 :
        </span>
      </div>
    </section>
  );
};

export default Profile;
