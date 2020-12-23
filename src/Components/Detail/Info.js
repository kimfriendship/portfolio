import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/icomoon/Github";
import { Calendar } from "@styled-icons/boxicons-regular/Calendar";
import { Link } from "@styled-icons/boxicons-regular/Link";
import { PeopleFill } from "@styled-icons/bootstrap/PeopleFill";

const Info = ({ project }) => {
  const { detail, date, member, github, page } = project;

  return (
    <>
      <Span>{detail}</Span>
      <Span>
        <Calendar size="20" />
        {date}
      </Span>
      <Span>
        <PeopleFill size="20" />
        {member} 프로젝트
      </Span>
      <Span>
        <Github size="20" />
        <Anchor href={github}>Repository 바로가기</Anchor>
      </Span>
      <Span>
        <Link size="20" />
        <Anchor href={page}>페이지 바로가기</Anchor>
      </Span>
    </>
  );
};

export default Info;

const Span = styled.span`
  font-size: 1.6rem;
`;

const Anchor = styled.a`
  text-decoration: underline;
`;
