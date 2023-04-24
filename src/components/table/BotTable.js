import React, { useState } from "react";
import "./BotTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import CreateBot from "../modal/form/CreateBot";
import EditBot from "../modal/form/EditBot";
import { useContentBot } from "../../context/mainContextBots";

function BotTable() {
  // Petición GET
  const { contents } = useContentBot();

  // Modal Editar
  const [showModalEditBot, setShowModalEditBot] = useState(false);
  const [id, setId] = useState(null);

  const handleShowModalEditBot = (_id) => {
    setShowModalEditBot(true);
    setId(_id);
  };
  const handleCloseModalEditBot = () => setShowModalEditBot(false);

  // Modal Crear bot
  const [showModalCreateBot, setShowModalCreateBot] = useState(false);

  const handleShowModalCreateBot = () => setShowModalCreateBot(true);
  const handleCloseModalCreateBot = () => setShowModalCreateBot(false);

  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title-bot">Bots</div>
        <div className="pos-boton1">
          <FontAwesomeIcon className="icon-refresh" icon={faArrowsRotate} />
        </div>
        <div className="pos-boton2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShowModalCreateBot}
          >
            Crear bot
          </button>
        </div>
      </div>
      <Table striped bordered hover className="vertical-align text-center">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Versión</th>
            <th>Compatibilidad</th>
            <th>Número intentos</th>
            <th>ttlResult</th>
            <th>ttlRequest</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr key={content._id}>
              <td>Color</td>
              <td>{content.name}</td>
              <td>{content.status}</td>
              <td>{content.version}</td>
              <td>
                {content.compatibility.map((platform) => (
                  <td key={platform}>{platform}</td>
                ))}
              </td>
              <td>{content.maximumAttempts}</td>
              <td>{content.ttlResult}</td>
              <td>{content.ttlRequest}</td>
              <td>
                <FontAwesomeIcon
                  className="edit-boton"
                  onClick={() => handleShowModalEditBot(content._id)}
                  icon={faPenToSquare}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Modal Editar bot */}
      <EditBot
        show={showModalEditBot}
        handleClose={handleCloseModalEditBot}
        id={id}
      />
      {/* Modal Crear bot */}
      <CreateBot
        show={showModalCreateBot}
        handleClose={handleCloseModalCreateBot}
      />
    </div>
  );
}

export default BotTable;
