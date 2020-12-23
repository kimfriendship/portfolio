import React from "react";
import styled from "styled-components";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Redux } from "@styled-icons/boxicons-logos/Redux";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Figma } from "@styled-icons/boxicons-logos/Figma";
import { Webpack } from "@styled-icons/simple-icons/Webpack";

const Tech = () => {};

const TechStack = ({ project }) => {
  const { techStack } = project;
  return <List>{techStack}</List>;
};

export default TechStack;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li``;
