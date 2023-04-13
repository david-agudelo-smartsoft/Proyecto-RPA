import React from 'react';
import "./ClientTable.css"
import Table from "react-bootstrap/Table";
import StatusList from "../list/StatusList";

function ClientTable() {
    return (
        <div className='MainContainer'>
            <div className="pos-title">
                <div className="title-client">Clientes</div>
                <div className="pos-boton2">
                    <button type="button" className="btn btn-primary">
                        Crear Cliente
                    </button>
                </div>
            </div>
            <Table striped bordered hover>
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
                        <td>Santiago Martinez</td>
                        <td>
                            <StatusList />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ClientTable;
