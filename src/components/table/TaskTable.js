import React, { useState } from 'react';
import "./TaskTable.css"
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

function TaskTable() {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className='MainContainer-tareas'>
            <div className="pos-title">
                <div className="title-tareas">Tareas</div>
                <div className="pos-boton1">
                    <FontAwesomeIcon className="icon-refresh" icon={faArrowsRotate} />
                </div>
            </div>
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
                        <td>20230000001871</td>
                        <td>Nueva</td>
                        <td className="text-center">
                            <Button variant="primary" size='sm' onClick={handleShowModal}>
                                Tipo de consulta
                            </Button>
                        </td>
                        <td>David Agudelo</td>
                        <td>Test</td>
                        <td>Agente 1</td>
                        <td className="text-center">3</td>
                        <td>00:12:35</td>
                        <td className="text-center">
                            <button>
                                <FontAwesomeIcon onClick={handleShowModal} className="rotate-icon" icon={faRotateRight} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Tipo de consulta / Log</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Esta es la información del parámetro 1.</p>
                    <p>Esta es la información del parámetro 1.</p>
                    <p>Esta es la información del parámetro 1.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TaskTable;
