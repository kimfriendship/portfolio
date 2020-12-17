import React from "react";
import ReactDOM from "react-dom";
import Dimmed from "./Dimmed";
import ProjectDetails from "./ProjectDetails";
import ProjectCarouselContainer from "../Containers/ProjectCarouselContainer";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";

const cx = classNames.bind(styles);

const Modal = ({ state, closeModal }) => {
  const modal = document.getElementById("modal");

  if (!state) return null;
  return ReactDOM.createPortal(
    <>
      <article className={cx("modal")}>
        <ProjectCarouselContainer />
        <ProjectDetails />
      </article>
      <Dimmed closeModal={closeModal}></Dimmed>
    </>,
    modal
  );
};

export default Modal;
