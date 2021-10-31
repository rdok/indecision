import React from "react";
import Modal from "react-modal";

const config = {
  title: "Selected Option",
};

export const ModalOption = ({
  appElement,
  option,
  handleOptionConfirmation,
}) => (
  <Modal
    isOpen={!!option}
    contentLabel={config.title}
    appElement={appElement}
    onRequestClose={handleOptionConfirmation}
    closeTimeoutMS={50}
    className="modal"
  >
    <h3 className="modal__title">{config.title}</h3>
    <p className="modal__body">{option}</p>
    <button className="button" onClick={handleOptionConfirmation}>
      OK
    </button>
  </Modal>
);
