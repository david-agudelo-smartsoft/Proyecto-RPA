import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function VersionModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar versión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formVersion">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Ingrese la versión" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    type="submit"
                    variant="primary"
                    onClick={handleClose}
                >
                    Aceptar
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default VersionModal