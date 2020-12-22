import React from "react";
import styled from "styled-components";
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
        <Link href="https://velog.io/@kimfriendship/series">
          https://velog.io/@kimfriendship/series
        </Link>
      </Item>
    </List>
  );
};

export default ContactList;

const List = styled.ul`
  margin-bottom: 3rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color.point};
`;

const Info = styled.a`
  margin-left: 1rem;
`;

const Link = styled.a`
  margin-left: 1rem;
`;
