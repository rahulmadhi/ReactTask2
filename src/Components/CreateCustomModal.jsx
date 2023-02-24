import React from "react";
import { Modal, ModalBody } from "reactstrap";
import ReactDOM from "react-dom";

const CreateCustomModal = props => {
  if (props.isShowing) {
    return ReactDOM.createPortal(
      <>
        <Modal
          isOpen={props.isShowing}
          toggle={() => {
            props.setIsShowing(!props.isShowing);
          }}
        >
          <ModalBody>{props.children}</ModalBody>
        </Modal>
      </>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default CreateCustomModal;
