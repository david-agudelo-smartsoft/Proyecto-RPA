import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

function SystemModal({ show, handleClose }) {
  const toppings = [
    {
      name: "WIN 64",
    },
    {
      name: "MAC",
    },
    {
      name: "Linux",
    },
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar compatibilidad</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formVersion">
            <Form.Label></Form.Label>
            <div>
              <ul>
                {toppings.map(({ name }, index) => {
                  return (
                    <li key={index}>
                      <div>
                        <div>
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={name}
                            value={name}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                          />
                          <label
                            className="pad-2"
                            htmlFor={`custom-checkbox-${index}`}
                          >
                            {name}
                          </label>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Form.Group>
                <div>{checkedState}</div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">
          Aceptar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SystemModal;
