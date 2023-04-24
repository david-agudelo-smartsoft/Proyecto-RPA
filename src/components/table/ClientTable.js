import React, { useState } from "react";
import "./ClientTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CreateClient from "../modal/form/CreateClient";
import EditClient from "../modal/form/EditClient";
import { useContent } from "../../context/mainContext";

function ClientTable() {
  // Petición GET
  const { contents } = useContent();

  // Editar estado
  const [showModalEditClient, setShowModalEditClient] = useState(false);
  const [id, setId] = useState(null);

  const handleShowModalEditClient = (_id) => {
    setShowModalEditClient(true);
    setId(_id);
  };
  const handleCloseModalEditClient = () => setShowModalEditClient(false);
  console.log(handleCloseModalEditClient);

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
      <Table striped bordered hover className="vertical-align text-center">
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content._id}>
              <td> {content.identifier} </td>
              <td>{content.name}</td>
              <td>{content.status}</td>
              <td>
                <FontAwesomeIcon
                  className="edit-boton"
                  onClick={() => handleShowModalEditClient(content._id)}
                  icon={faPenToSquare}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditClient
        show={showModalEditClient}
        handleClose={handleCloseModalEditClient}
        id={id}
      />
      <CreateClient
        show={showModalCreateClient}
        handleClose={handleCloseModalCreateClient}
      />
    </div>
  );
}

export default ClientTable;
