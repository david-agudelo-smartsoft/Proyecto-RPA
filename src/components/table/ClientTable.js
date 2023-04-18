import React, { useState } from "react";
import "./ClientTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ClientNameModal from "../modal/ClientNameModal";
import ClientStatusModal from "../modal/ClientStatusModal";
import CreateClient from "../modal/form/CreateClient";

function ClientTable() {

  // Editar nombre
  const [showModalName, setShowModalName] = useState(false);

  const handleShowModalName = () => setShowModalName(true);
  const handleCloseModalName = () => setShowModalName(false);

  // Editar estado
  const [showModalStatus, setShowModalStatus] = useState(false);


  const handleShowModalStatus = () => setShowModalStatus(true);
  const handleCloseModalStatus = () => setShowModalStatus(false);

  const [showModalCreateClient, setShowModalCreateClient] = useState(false);

  const handleShowModalCreateClient = () => setShowModalCreateClient(true);
  const handleCloseModalCreateClient = () => setShowModalCreateClient(false);


  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title-client">Clientes</div>
        <div className="pos-boton2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShowModalCreateClient}
          >
            Crear Cliente
          </button>
        </div>
      </div>
      <Table striped bordered hover className="vertical-align">
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1003688827</td>
            <td>
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalName}
                icon={faPenToSquare}
              />
            </td>
            <td>
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalStatus}
                icon={faPenToSquare}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <ClientNameModal show={showModalName} handleClose={handleCloseModalName} />
      <ClientStatusModal show={showModalStatus} handleClose={handleCloseModalStatus} />
      <CreateClient
        show={showModalCreateClient}
        handleClose={handleCloseModalCreateClient}
      />
    </div>
  );
}

export default ClientTable;
