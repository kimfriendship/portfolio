import React from "react";
import ReactDOM from "react-dom";
import Dimmed from "./Dimmed";
import ProjectDetails from "./ProjectDetails";
import ProjectCarouselContainer from "../Containers/ProjectCarouselContainer";

const Modal = ({ state, closeModal }) => {
  const modal = document.getElementById("modal");

  if (!state) return null;
  return ReactDOM.createPortal(
    <>
      <article>
        <ProjectCarouselContainer />
        <ProjectDetails />
      </article>
      <Dimmed closeModal={closeModal} />
    </>,
    modal
  );
};

export default Modal;
