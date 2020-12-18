import React from "react";
import Modal from "../Components/Modal";
import data from "../Data/data";

const ModalContainer = ({ state, closeModal }) => {
  const project = data.filter(({ id }) => id === state)[0];

  return <Modal project={project} closeModal={closeModal} />;
};

export default ModalContainer;
