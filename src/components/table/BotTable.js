import React, { useState } from "react";
import "./BotTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import StatusList from "../list/StatusList";
import SystemModal from "../modal/SystemModal";
import VersionModal from "../modal/VersionModal";
import AttemptsModal from "../modal/AttemptsModal";
import ResultModal from "../modal/ResultModal";
import RequestModal from "../modal/RequestModal";
import CreateBot from "../modal/form/CreateBot";

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
  // Modal Compatibilidad
  const [showModalSystem, setShowModalSystem] = useState(false);

  const handleShowModalSystem = () => setShowModalSystem(true);
  const handleCloseModalSystem = () => setShowModalSystem(false);

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
          <button type="button" className="btn btn-primary" onClick={handleShowModalCreateBot}>
            Crear bot
          </button>
        </div>
      </div>
      <Table striped bordered hover className="vertical-align">
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
            <td>
                <StatusList />
            </td>
            <td>
              2023 4.1
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalVersion}
                icon={faPenToSquare}
              />
            </td>
            <td>
            <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalSystem}
                icon={faPenToSquare}
              />
            </td>
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
      <VersionModal
        show={showModalVersion}
        handleClose={handleCloseModalVersion}
      />
      {/* Modal Numero intentos */}
      <AttemptsModal
        show={showModalNumIntent}
        handleClose={handleCloseModalNumIntent}
      />
      {/* Modal Resultado */}
      <ResultModal
        show={showModalResult}
        handleClose={handleCloseModalResult}
      />
      {/* Modal Pedido */}
      <RequestModal
        show={showModalRequest}
        handleClose={handleCloseModalRequest}
      />
      {/* Modal Compatibilidad */}
      <SystemModal
        show={showModalSystem}
        handleClose={handleCloseModalSystem}
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
