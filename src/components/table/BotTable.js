import React from "react";
import "./BotTable.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function BotTable() {
  return (
    <div className="MainContainer">
      <div className="pos-title">
        <div className="title">Bots</div>
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
            <td>Lista desplegable</td>
            <td>2023 4.1 (Editable)</td>
            <td>Lista desplegable</td>
            <td>3 (Editable)</td>
            <td>720 (Editable)</td>
            <td>720 (Editable)</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BotTable;
