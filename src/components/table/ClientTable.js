import React, { useState } from "react";
import "./ClientTable.css";
import Table from "react-bootstrap/Table";
import StatusList from "../list/StatusList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ClientNameModal from "../modal/ClientNameModal";
import CreateClient from "../modal/form/CreateClient";

function ClientTable() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showModalCreateClient, setShowModalCreateClient] = useState(false);

  const handleShowModalCreateClient = () => setShowModalCreateClient(true);
  const handleCloseModalCreateClient = () => setShowModalCreateClient(false);

  const NombreCliente = "Nombre cliente";

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
              {NombreCliente}
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModal}
                icon={faPenToSquare}
              />
            </td>
            <td>
              <StatusList />
            </td>
          </tr>
        </tbody>
      </Table>
      <ClientNameModal show={showModal} handleClose={handleCloseModal} />
      <CreateClient
        show={showModalCreateClient}
        handleClose={handleCloseModalCreateClient}
      />
    </div>
  );
}

export default ClientTable;
