import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ModalEditOperator({
  isShow = false,
  operator = { email: "", name: "", id: "" },
}) {
  const [show, setShow] = useState(isShow);
  const [newName, setNewName] = useState(operator.name);
  const [newEmail, setNewEmail] = useState(operator.email);

  const handleClose = () => setShow(false);

  const submit = () => {
    const data = {
      name: newName,
      email: newEmail,
    };

    axios
      .put(`http://localhost:8000/api/v1/operators/${operator?.id}`, data)
      .then((res) => alert("Operador actualizado" + res.status));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Operador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={submit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditOperator;
