import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Formik, ErrorMessage } from 'formik'
import { useContent } from "../../../context/mainContext";
import * as Yup from 'yup';
import toast from 'react-hot-toast';

function EditClient({ id, show, handleClose }) {

  const { getClientById, updateClient } = useContent();

  const [client, setClient] = useState({
   
    name: "",
    status: "",
  })

  useEffect(() => {
    (async () => {
      if (id) {
        const resClient = await getClientById(id);
        setClient(resClient)
      }
    })();
  }, [id, getClientById]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cliente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={client}
          onSubmit={(values, { resetForm }) => {
            try {
              updateClient(id, values);
              handleClose();
              resetForm();
              toast.success('Usuario Actualizado');
            } catch (error) {
              console.error(error);
            }
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Campo requerido'),
            status: Yup.string().oneOf(['ACTIVE', 'INACTIVE', 'STOPPED'], 'Estado inválido').required('Campo requerido')
          })}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNameUser">
                <FloatingLabel
                  label="Número de identificación"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name="identifier"
                    value={values.identifier}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="identifier" />
                </FloatingLabel>
                <FloatingLabel label="Nombre del cliente" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="name" />
                </FloatingLabel>
                <FloatingLabel label="Estado" className="mb-3">
                  <Form.Control
                    as="select"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                    <option value="STOPPED">STOPPED</option>
                  </Form.Control>
                  <ErrorMessage name="status" />
                </FloatingLabel>
              </Form.Group>
              <Modal.Footer>
                <Button type="submit" variant="primary">
                  Aceptar
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default EditClient;
