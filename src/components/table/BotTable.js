import React, { useState } from "react";
import "./BotTable.css";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function BotTable() {
  // Modal Version
  const [showModalVersion, setShowModalVersion] = useState(false);

  const handleShowModalVersion = () => setShowModalVersion(true);
  const handleCloseModalVersion = () => setShowModalVersion(false);
  // Modal numero intentos
  const [showModalNumIntent, setShowModalNumIntent] = useState(false);

  const handleShowModalNumIntent = () => setShowModalNumIntent(true);
  const handleCloseModalNumIntent = () => setShowModalNumIntent(false);
  // Modal Resultado
  const [showModalResult, setShowModalResult] = useState(false);

  const handleShowModalResult = () => setShowModalResult(true);
  const handleCloseModalResult = () => setShowModalResult(false);
  // Modal Pedido
  const [showModalRequest, setShowModalRequest] = useState(false);

  const handleShowModalRequest = () => setShowModalRequest(true);
  const handleCloseModalRequest = () => setShowModalRequest(false);

  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title-bot">Bots</div>
        <div className="pos-boton1">
          <FontAwesomeIcon className="icon-refresh" icon={faArrowsRotate} />
        </div>
        <div className="pos-boton2">
          <button type="button" className="btn btn-primary">
            Crear bot
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Versión</th>
            <th>Compatibilidad</th>
            <th>Número intentos</th>
            <th>Resultado</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Color</td>
            <td>Nombre bot</td>
            <td>Lista desplegable</td>
            <td>
              2023 4.1
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalVersion}
                icon={faPenToSquare}
              />
            </td>
            <td>Lista desplegable</td>
            <td>
              3
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalNumIntent}
                icon={faPenToSquare}
              />
            </td>
            <td>
              720
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalResult}
                icon={faPenToSquare}
              />
            </td>
            <td>
              720
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalRequest}
                icon={faPenToSquare}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      {/* Modal Version */}
      <Modal show={showModalVersion} onHide={handleCloseModalVersion}>
        <Modal.Header closeButton>
          <Modal.Title>Editar versión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formVersion">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Ingrese la versión" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={handleCloseModalVersion}
          >
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleCloseModalVersion}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Numero intentos */}
      <Modal show={showModalNumIntent} onHide={handleCloseModalNumIntent}>
        <Modal.Header closeButton>
          <Modal.Title>Editar numero de intentos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNumIntents">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el numero de intentos"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={handleCloseModalNumIntent}
          >
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleCloseModalNumIntent}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Resultado */}
      <Modal show={showModalResult} onHide={handleCloseModalResult}>
        <Modal.Header closeButton>
          <Modal.Title>Editar resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formResult">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Ingrese el resultado" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={handleCloseModalResult}
          >
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleCloseModalResult}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal Pedido */}
      <Modal show={showModalRequest} onHide={handleCloseModalRequest}>
        <Modal.Header closeButton>
          <Modal.Title>Editar pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formRequest">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Ingrese el pedido" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={handleCloseModalRequest}
          >
            Aceptar
          </Button>
          <Button variant="secondary" onClick={handleCloseModalRequest}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BotTable;
