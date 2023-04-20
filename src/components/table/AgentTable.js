import React, { useState } from "react";
import "./AgentTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditAgent from "../modal/form/EditAgent";
import CreateAgent from "../modal/form/CreateAgent";
import { useContent } from "../../context/mainContext";

function AgentTable() {
  //Petcion GET 
  const { contents } = useContent()

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
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShowModalCreateAgent}
          >
            Crear Agente
          </button>
        </div>
      </div>
      <Table striped bordered hover className="vertical-align text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Ultima conexión</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
        {contents.map(content => (
          <tr key={content._id}>
            <td>
                {content.name}
              </td>
              <td>
                {content.status}
              </td>
            <td>{content.createdAt} (Validación con colores)</td>
            <td>
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModal}
                icon={faPenToSquare}
              />
            </td>
          </tr>
           ))}
        </tbody>
      </Table>
      <EditAgent show={showModal} handleClose={handleCloseModal} />
      <CreateAgent
        show={showModalCreateAgent}
        handleClose={handleCloseModalCreateAgent}
      />
    </div>
  );
}

export default AgentTable;
