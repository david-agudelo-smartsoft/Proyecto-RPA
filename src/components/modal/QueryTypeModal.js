import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function QueryTypeModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tipo de consulta / Log</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Esta es la información del parámetro 1.</p>
        <p>Esta es la información del parámetro 1.</p>
        <p>Esta es la información del parámetro 1.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default QueryTypeModal;
