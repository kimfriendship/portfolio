import React from "react";
import ReactDOM from "react-dom";
import Dimmed from "./Dimmed";
import ProjectDetails from "./ProjectDetails";
import classNames from "classnames/bind";
import styles from "../Scss/modal.module.scss";
import { Close } from "@styled-icons/evaicons-solid/Close";

const cx = classNames.bind(styles);

const Modal = ({ closeModal, project }) => {
  if (!project) return null;
  const modal = document.getElementById("modal");
  const { name } = project;

  return ReactDOM.createPortal(
    <>
      <article className={cx("modal")}>
        <h3 className={cx("modalTitle")}>
          {name.toUpperCase()}
          <span className={cx("deco")}></span>
        </h3>
        <div className={cx("modalWrapper")}>
          <ProjectDetails project={project} />
          <button
            className={cx("closeBtn", "btn")}
            type="button"
            onClick={closeModal}
            aria-label="모달창 닫기"
          >
            <Close size="30" />
          </button>
        </div>
      </article>
      <Dimmed closeModal={closeModal} zIndex={150}></Dimmed>
    </>,
    modal
  );
};

export default Modal;
