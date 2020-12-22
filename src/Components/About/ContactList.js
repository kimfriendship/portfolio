import React from "react";
import styled, { css } from "styled-components";
import { Email } from "@styled-icons/material/Email";
import { Github } from "@styled-icons/icomoon/Github";
import { Book } from "@styled-icons/fa-solid/Book";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";

const ContactList = () => {
  return (
    <List>
      <Item>
        <TelephoneFill size="20" />
        <Info>010 8024 2242</Info>
      </Item>
      <Item>
        <Email size="20" />
        <Link href="mailto:kfriendship94@gmail.com">
          kfriendship94@gmail.com
        </Link>
      </Item>
      <Item>
        <Github size="20" />
        <Link href="https://github.com/kimfriendship">
          https://github.com/kimfriendship
        </Link>
      </Item>
      <Item>
        <Book size="20" />
        <Link href="https://velog.io/@kimfriendship">
          https://velog.io/@kimfriendship
        </Link>
      </Item>
    </List>
  );
};

export default ContactList;

const List = styled.ul`
  margin-bottom: 3rem;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.color.point};
`;

const commonStyle = css`
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 0 0.5rem;
  margin-left: 0.5rem;
  word-break: break-all;
`;

const Info = styled.a`
  ${commonStyle}
`;

const Link = styled.a`
  ${commonStyle}
  &:hover,
  &:focus {
    outline: none;
    color: white;
    background-color: ${({ theme }) => theme.color.point};
  }
`;
