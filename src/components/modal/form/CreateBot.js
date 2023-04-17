import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import StatusList from "../../list/StatusList";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import SystemModal from "../SystemModal";

function CreateBot({ show, handleClose }) {
  // Modal Compatibilidad
  const [showModalSystem, setShowModalSystem] = useState(false);

  const handleShowModalSystem = () => setShowModalSystem(true);
  const handleCloseModalSystem = () => setShowModalSystem(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Bot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formNameUser">
            <FloatingLabel
              controlId="nameBot"
              label="Nombre del bot"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel controlId="stateBot" label="Estado" className="mb-3">
              <StatusList />
            </FloatingLabel>
            <FloatingLabel controlId="version" label="Versión" className="mb-3">
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="System"
              label="Compatibilidad"
              className="mb-3"
            >
              <Form.Control type="text" onClick={handleShowModalSystem} />
            </FloatingLabel>
            <FloatingLabel
              controlId="numInt"
              label="Numero de intentos"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel
              controlId="result"
              label="Resultado"
              className="mb-3"
            >
              <Form.Control type="text" />
            </FloatingLabel>
            <FloatingLabel controlId="request" label="Pedido" className="mb-3">
              <Form.Control type="text" />
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
      {/* Modal Compatibilidad */}
      <SystemModal
        show={showModalSystem}
        handleClose={handleCloseModalSystem}
      />
    </Modal>
  );
}

export default CreateBot;
