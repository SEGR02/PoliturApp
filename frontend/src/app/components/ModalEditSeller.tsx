import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import viewPassword from "@/assets/viewPassword.svg";
import Image from "next/image";
import axios from "axios";

function ModalEditSeller({
  isShow = false,
  seller = { email: "", fullname: "", password: "", id: "" },
}) {
  const [show, setShow] = useState(isShow);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(seller.password.slice(0, 10));
  const [newFullname, setNewFullname] = useState(seller.fullname);
  const [newEmail, setNewEmail] = useState(seller.email);

  const handleClose = () => setShow(false);

  const submit = () => {
    const data = {
      fullname: newFullname,
      email: newEmail,
      password: newPassword,
    };

    axios
      .put(
        `https://politurapp-production.up.railway.app/api/v1/auth/update/${seller?.id}`,
        data
      )
      .then((res) => alert("Vendedor actualizado" + res.status));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                value={newFullname}
                onChange={(e) => setNewFullname(e.target.value)}
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Image
                style={{
                  position: "absolute",
                  marginLeft: "435px",
                  marginTop: "-28px",
                  cursor: "pointer",
                }}
                src={viewPassword}
                alt="O"
                onClick={() => setShowPassword(!showPassword)}
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

export default ModalEditSeller;
