import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import StatusList from "../../list/StatusList";

function CreateAgent({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Agente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNameUser">
            <FloatingLabel
              controlId="nameAgent"
              label="Nombre del agente"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="stateAgent"
              label="Estado"
              className="mb-3"
            >
              <StatusList />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">
          Aceptar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateAgent;
