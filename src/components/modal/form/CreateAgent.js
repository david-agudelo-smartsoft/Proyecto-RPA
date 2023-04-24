import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Formik, ErrorMessage } from "formik";
import { useContentAgent } from "../../../context/mainContextAgents";
import * as Yup from "yup";
import toast from "react-hot-toast";

function CreateAgent({ show, handleClose }) {
  const { postAgents } = useContentAgent();
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Agente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            status: "",
          }}
          onSubmit={(values, { resetForm }) => {
            try {
              postAgents(values);
              handleClose();
              resetForm();
              toast.success('Agente creado');
            } catch (error) {
              console.error(error);
            }
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Campo requerido"),
            status: Yup.string()
              .oneOf(["ACTIVE", "INACTIVE", "STOPPED"], "Estado inválido")
              .required("Campo requerido"),
          })}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNameUser">
                <FloatingLabel label="Nombre del agente" className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="field-error text-danger"
                  />
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
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="field-error text-danger"
                  />
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

export default CreateAgent;
