import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <Sentence>안녕하세요. 프론트엔드 개발자 김우정입니다.</Sentence>
      <Sentence>
        '만드는 것'과 그것을 '다른 사람들과 나누는 것'에서 가장 큰 즐거움을
        느끼고 성취감을 느낍니다.
        <br />
        프로그래밍을 통해, 만들 수 있는 것의 한계를 조금씩 허물고자 합니다.
      </Sentence>
      <Sentence>
        항상 기본기를 탄탄히 다지려고 노력하며, 그에 따라 새로운 기술을 빠르게
        습득하는 편입니다.
        <br />
        사용자 경험에 관심이 많고 높은 웹 접근성을 가진 제품을 개발하는데
        기여하고 싶습니다.
      </Sentence>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.span``;

const Sentence = styled.p`
  font-size: 1.6rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;
