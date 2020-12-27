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
      <Span gap="5rem">{detail}</Span>
      <List>
        <Item>
          <Calendar size="20" />
          <Span>{date}</Span>
        </Item>
        <Item>
          <PeopleFill size="20" />
          <Span>{member} 프로젝트</Span>
        </Item>
        <Item>
          <Github size="20" />
          <Anchor href={github}>Repository 바로가기</Anchor>
        </Item>
        <Item>
          <Link size="20" />
          <Anchor href={page}>페이지 바로가기</Anchor>
        </Item>
      </List>
    </>
  );
};

export default Info;

const List = styled.ul`
  font-size: 1.6rem;
  margin-top: 2rem;
`;

const Item = styled.li`
  & > span,
  & > a {
    margin-left: 1rem;
    line-height: 2.5rem;
  }
`;

const Span = styled.span`
  font-size: 1.6rem;
  line-height: 2.5rem;
  margin-top: ${({ gap }) => gap};
`;

const Anchor = styled.a`
  text-decoration: underline;

  &:hover,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.color.point};
  }
`;
