import React from 'react';
import "./ClientTable.css"
import Table from "react-bootstrap/Table";

function ClientTable() {
    return (
        <div className='MainContainer'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID tareas</th>
                        <th>Estados</th>
                        <th>Paramatros</th>
                        <th>Cliente</th>
                        <th>Bot</th>
                        <th>Agente</th>
                        <th>Número de Intentos</th>
                        <th>Tiempo</th>
                        <th>Reiniciar tarea</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Activo</td>
                        <td>Parámetro 1</td>
                        <td>Cliente A</td>
                        <td>Bot 1</td>
                        <td>Agente 1</td>
                        <td>3</td>
                        <td>00:12:35</td>
                        <td>
                            <button type="button" className="btn btn-primary">
                                Reiniciar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ClientTable;
