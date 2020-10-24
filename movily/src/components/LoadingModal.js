import * as React from "react";
import { Modal, Image } from "react-bootstrap";

import "../styles/LoadingModal.css";

const LoadingModal = ({ visible, message }) => {
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={visible}
        >
            <Modal.Body className="modal-container">
                <p className="modal-text">{message}</p>
                <Image src={require("../assets/spinner.gif")} className="modal-spinner"/>
            </Modal.Body>
        </Modal>
    );
}

export default LoadingModal;
