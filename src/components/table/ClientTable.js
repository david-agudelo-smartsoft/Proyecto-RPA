import React from 'react';
import "./ClientTable.css"
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

function ClientTable() {
    return (
        <div className='MainContainer'>
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
                            <Form.Select>
                                <option>ACTIVE</option>
                                <option>INACTIVE</option>
                                <option>STOPPED</option>
                            </Form.Select>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ClientTable;
