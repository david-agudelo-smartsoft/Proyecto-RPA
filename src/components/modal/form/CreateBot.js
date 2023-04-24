import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Formik, ErrorMessage } from "formik";
import { useContentBot } from "../../../context/mainContextBots";
import * as Yup from "yup";
import toast from "react-hot-toast";

import SystemModal from "../SystemModal";

function CreateBot({ show, handleClose }) {
  const { postBots } = useContentBot();
  // Modal Compatibilidad
  const [showModalSystem, setShowModalSystem] = useState(false);

  const handleShowModalSystem = () => setShowModalSystem(true);
  const handleCloseModalSystem = () => setShowModalSystem(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Bot</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            status: "",
            version: "",
            compatibility: "",
            maximumAttempts: "",
            ttlResult: "",
            ttlRequest: "",
          }}
          onSubmit={(values, { resetForm }) => {
            try {
              postBots(values);
              handleClose();
              resetForm();
              toast.success("Bot creado");
            } catch (error) {
              console.error(error);
            }
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Campo requerido"),
            status: Yup.string()
              .oneOf(["ACTIVE", "INACTIVE", "STOPPED"], "Estado inválido")
              .required("Campo requerido"),
            version: Yup.string().required("Campo requerido"),
            compatibility: Yup.string().notOneOf(["ACTIVE", "INACTIVE", "STOPPED"], "Estado inválido").required("Campo requerido"),
            maximumAttempts: Yup.number().required("Campo requerido"),
            ttlResult: Yup.number().required("Campo requerido"),
            ttlRequest: Yup.number().required("Campo requerido"),
          })}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formNameUser">
                <FloatingLabel label="Nombre bot" className="mb-3">
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
                <FloatingLabel label="Versión" className="mb-3">
                  <Form.Control
                    type="text"
                    name="version"
                    value={values.version}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="version"
                    component="div"
                    className="field-error text-danger"
                  />
                </FloatingLabel>
                <FloatingLabel label="Compatibilidad" className="mb-3">
                  {/* <Form.Control
                    type="text"
                    name="compatibility"
                    value={values.compatibility}
                    onChange={handleChange}
                    onClick={handleShowModalSystem} 
                  /> */}
                  <Form.Control
                    as="select"
                    name="status"
                    value={values.compatibility}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                    <option value="STOPPED">STOPPED</option>
                  </Form.Control>
                  <ErrorMessage
                    name="compatibility"
                    component="div"
                    className="field-error text-danger"
                  />
                </FloatingLabel>
                <FloatingLabel label="Número intentos" className="mb-3">
                  <Form.Control
                    type="number"
                    name="maximumAttempts"
                    value={values.maximumAttempts}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="maximumAttempts"
                    component="div"
                    className="field-error text-danger"
                  />
                </FloatingLabel>
                <FloatingLabel label="ttlResult" className="mb-3">
                  <Form.Control
                    type="number"
                    name="ttlResult"
                    value={values.ttlResult}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="ttlResult"
                    component="div"
                    className="field-error text-danger"
                  />
                </FloatingLabel>
                <FloatingLabel label="ttlRequest" className="mb-3">
                  <Form.Control
                    type="number"
                    name="ttlRequest"
                    value={values.ttlRequest}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="ttlRequest"
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
              {/* Modal Compatibilidad */}
              <SystemModal
                show={showModalSystem}
                handleClose={handleCloseModalSystem}
              />
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}

export default CreateBot;
