import React, { useState } from "react";
import "./AgentTable.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function AgentTable() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title-agents">Agentes</div>
        <div className="pos-boton2">
          <button type="button" className="btn btn-primary">
            Crear bot
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Ultima conexión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Nombre agente{" "}
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModal}
                icon={faPenToSquare}
              />
            </td>
            <td>Lista desplegable</td>
            <td>05/04/2023 03:00 am (Validación con colores)</td>
          </tr>
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar nombre usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNameUser">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del agente"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleCloseModal}>
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AgentTable;
