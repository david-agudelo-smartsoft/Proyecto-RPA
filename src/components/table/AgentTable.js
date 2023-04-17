import React, { useState } from "react";
import "./AgentTable.css";
import Table from "react-bootstrap/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import StatusList from "../list/StatusList";
import AgentNameModal from "../modal/AgentNameModal";
import CreateAgent from "../modal/form/CreateAgent";

function AgentTable() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showModalCreateAgent, setShowModalCreateAgent] = useState(false);

  const handleShowModalCreateAgent = () => setShowModalCreateAgent(true);
  const handleCloseModalCreateAgent = () => setShowModalCreateAgent(false);
  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title-agents">Agentes</div>
        <div className="pos-boton2">
          <button type="button" className="btn btn-primary" onClick={handleShowModalCreateAgent}>
            Crear Agente
          </button>
        </div>
      </div>
      <Table striped bordered hover className="vertical-align">
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
            <td><StatusList /></td>
            <td>05/04/2023 03:00 am (Validación con colores)</td>
          </tr>
        </tbody>
      </Table>
      <AgentNameModal show={showModal} handleClose={handleCloseModal}/>
      <CreateAgent show={showModalCreateAgent} handleClose={handleCloseModalCreateAgent}/>
    </div>
  );
}

export default AgentTable;
