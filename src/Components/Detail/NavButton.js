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
      {direction ? <NavigateNext size="40" /> : <NavigateBefore size="40" />}
    </Button>
  );
};

export default NavButton;

const Button = styled.button``;
