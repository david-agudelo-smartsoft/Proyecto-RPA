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

function BotTable() {
  // Modal Editar
  const [showModalEditBot, setShowModalEditBot] = useState(false);

  const handleShowModalEditBot = () => setShowModalEditBot(true);
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
            <th>ttResult</th>
            <th>ttRequest</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Color</td>
            <td>Nombre bot</td>
            <td>ACTIVE</td>
            <td>2023 4.1</td>
            <td>Win 32</td>
            <td>3</td>
            <td>720</td>
            <td>720</td>
            <td>
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalEditBot}
                icon={faPenToSquare}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      {/* Modal Editar bot */}
      <EditBot show={showModalEditBot} handleClose={handleCloseModalEditBot} />
      {/* Modal Crear bot */}
      <CreateBot
        show={showModalCreateBot}
        handleClose={handleCloseModalCreateBot}
      />
    </div>
  );
}

export default BotTable;
