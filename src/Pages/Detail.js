import React from "react";
import { useLocation } from "react-router-dom";
import { Content, Section, Title } from "../Components";
import data from "../Data/data";

const Detail = () => {
  window.scrollTo(0, 0);
  const { search } = useLocation();
  const projectName = search.split("=")[1];
  const [project] = data.filter(({ name }) => name === projectName);
  const title = projectName.split("-").join("  ").toUpperCase();

  return (
    <>
      <Section>
        <Title>{title}</Title>
        <Content project={project} />
      </Section>
    </>
  );
};

export default Detail;
