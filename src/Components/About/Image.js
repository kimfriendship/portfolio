import React from "react";
import styled from "styled-components";
import Profile from "../../Asset/profile.jpeg";

const Image = () => {
  return <Pic src={Profile} />;
};

export default Image;

const Pic = styled.img`
  width: 40%;
  height: 40%;
  border-radius: 20px;
  margin: 0 2rem 3rem 0;

  @media ${({ theme }) => theme.size.mobile} {
    width: 100%;
  }
`;
