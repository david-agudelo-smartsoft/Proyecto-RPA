import React, { useState } from "react";
import "./AgentTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditAgent from "../modal/form/EditAgent";
import CreateAgent from "../modal/form/CreateAgent";
import { useContentAgent } from "../../context/mainContextAgents";

function AgentTable() {
  //Petcion GET
  const { contents } = useContentAgent();

  const [showModalEditAgent, setShowModalEditAgent] = useState(false);
  const [id, setId] = useState(null);

  const handleShowModalEditAgent = (_id) => {
    setShowModalEditAgent(true);
    setId(_id);
  };
  const handleCloseModalEditAgent = () => setShowModalEditAgent(false);

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
          {contents.map((content) => (
            <tr key={content._id}>
              <td>{content.name}</td>
              <td>{content.status}</td>
              <td> (Validación con colores)</td>
              <td>
                <FontAwesomeIcon
                  className="edit-boton"
                  onClick={() => handleShowModalEditAgent(content._id)}
                  icon={faPenToSquare}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditAgent
        show={showModalEditAgent}
        handleClose={handleCloseModalEditAgent}
        id={id}
      />
      <CreateAgent
        show={showModalCreateAgent}
        handleClose={handleCloseModalCreateAgent}
      />
    </div>
  );
}

export default AgentTable;
