import React from "react";
import { useLocation } from "react-router-dom";
import { Content, Section, Title } from "../Components";
import data from "../Data/data";

const Detail = () => {
  const { search } = useLocation();
  const projectName = search.split("=")[1];
  const project = data.filter(({ name }) => name === projectName);

  return (
    <>
      <Section>
        <Title>{projectName}</Title>
        <Content project={project} />
      </Section>
    </>
  );
};

export default Detail;
