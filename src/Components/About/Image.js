import React from "react";
import styled from "styled-components";
import Boree from "../../Asset/boree.jpeg";

const Image = () => {
  return <Pic src={Boree} />;
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
