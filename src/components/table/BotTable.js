import React, { useState } from "react";
import "./BotTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPenToSquare,
} 
from "@fortawesome/free-solid-svg-icons";
import StatusList from "../list/StatusList";
import SystemList from "../list/SystemList";
import VersionModal from "../modal/VersionModal";
import AttemptsModal from "../modal/AttemptsModal";
import ResultModal from "../modal/ResultModal";
import RequestModal from "../modal/RequestModal";

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
            <td> <StatusList /> </td>
            <td>
              2023 4.1
              <FontAwesomeIcon
                className="edit-boton"
                onClick={handleShowModalVersion}
                icon={faPenToSquare}
              />
            </td>
            <td><SystemList /></td>
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
        <VersionModal show={showModalVersion} handleClose={handleCloseModalVersion}/>
      {/* Modal Numero intentos */}
        <AttemptsModal show={showModalNumIntent} handleClose={handleCloseModalNumIntent} />
      {/* Modal Resultado */}
        <ResultModal show={showModalResult} handleClose={handleCloseModalResult}/>
      {/* Modal Pedido */}
        <RequestModal show={showModalRequest} handleClose={handleCloseModalRequest} />
    </div>
  );
}

export default BotTable;
