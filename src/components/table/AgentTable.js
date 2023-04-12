import React from 'react';
import "./AgentTable.css"
import Table from "react-bootstrap/Table";

function AgentTable() {
    return (
        <div className='MainContainer'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Ultima conexión</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre usuario (Editable)</td>
                        <td>Lista desplegable</td>
                        <td>05/04/2023 03:00 am (Validación con colores)</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default AgentTable;
