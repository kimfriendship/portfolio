import React, { useState } from "react";
import Title from "../Components/Title";
import ProjectCards from "../Components/ProjectCards";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";
import data from "../Data/data";
import ModalContainer from "../Containers/ModalContainer";

const cx = classNames.bind(styles);

const ProjectsContainer = () => {
  const [modal, setModal] = useState(null);

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  return (
    <>
      <section className={cx("projectSection")}>
        <Title>PROJECTS</Title>
        <ul className={cx("cardList")}>
          {data.map((project) => (
            <ProjectCards
              project={project}
              key={project.id}
              openModal={openModal}
            />
          ))}
        </ul>
      </section>
      <ModalContainer state={modal} closeModal={closeModal} />
    </>
  );
};

export default ProjectsContainer;
