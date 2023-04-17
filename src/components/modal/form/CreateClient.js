import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusList from "../../list/StatusList";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function CreateClient({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNameUser">
            <FloatingLabel
              controlId="numId"
              label="Número de identificación"
              className="mb-3"
            >
              <Form.Control type="number" />
            </FloatingLabel>
            <FloatingLabel
              controlId="nameClient"
              label="Nombre del cliente"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="stateClient"
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

export default CreateClient;
