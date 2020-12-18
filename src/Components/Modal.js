import React from "react";
import ReactDOM from "react-dom";
import Dimmed from "./Dimmed";
import ProjectDetails from "./ProjectDetails";
import classNames from "classnames/bind";
import styles from "../Scss/project.module.scss";
import { Close } from "@styled-icons/evaicons-solid/Close";

const cx = classNames.bind(styles);

const Modal = ({ state, closeModal }) => {
  const modal = document.getElementById("modal");

  if (!state) return null;
  return ReactDOM.createPortal(
    <>
      <article className={cx("modal")}>
        <ProjectDetails projectId={state} />
        <button
          className={cx("closeBtn", "btn")}
          type="button"
          onClick={closeModal}
        >
          <Close size="30" />
        </button>
      </article>
      <Dimmed closeModal={closeModal} zIndex={150}></Dimmed>
    </>,
    modal
  );
};

export default Modal;
