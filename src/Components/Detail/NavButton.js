import React from "react";
import styled from "styled-components";
import { NavigateBefore } from "@styled-icons/material-rounded/NavigateBefore";
import { NavigateNext } from "@styled-icons/material-rounded/NavigateNext";

const NavButton = ({ direction, event }) => {
  return (
    <Button
      type="button"
      onClick={event}
      aria-label={direction ? "다음 사진으로 이동" : "이전 사진으로 이동"}
    >
      {direction ? <NavigateNext size="30" /> : <NavigateBefore size="30" />}
    </Button>
  );
};

export default NavButton;

const Button = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-shadow: 1px 1px 5px 0 gray;
  transition: 0.2s ease-in;
  border-radius: 50%;
  border: none;

  &:hover,
  &:focus {
    outline: none;
    cursor: pointer;
    color: white;
    background-color: gray;
    transform: scale(1.2);
    transition: 0.2s ease-in;
  }
`;
