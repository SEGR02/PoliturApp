import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputCustom from "./InputCustom";
import axios from "axios";
import moment from "moment";
import "moment-timezone";

function Example({ isShow = false }) {
  const [show, setShow] = useState(isShow);
  const [operatorsList, setOperatorsList] = useState([]);
  const [operator, setOperator] = useState<any>();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [observations, setObservations] = useState("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get(`https://politurapp-production.up.railway.app/api/v1/operators`)
      .then((res) => {
        res.data.forEach((operator: any) => {
          operator.label = operator.name;
        });
        setOperatorsList(res.data);
      });
  }, []);

  const submit = () => {
    const chileTime = moment().tz("America/Santiago");
    const hourInChile = chileTime.format("HH:mm");
    const data = {
      date: new Date().toISOString().split("T")[0],
      hour: hourInChile,
      title: title,
      paymentFormat: "Abono",
      observations: observations,
      amount: amount,
      operator: operator?.name,
    };

    axios
      .post(
        "https://politurapp-production.up.railway.app/api/v1/managmentPayments",
        data
      )
      .then((response) => {
        console.log("Registro creado:", response.data);
      })
      .catch((error) => {
        console.error("Error al crear el registro:", error);
      })
      .finally(() => handleClose());
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
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pago transferencia"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Operador</Form.Label>
              <InputCustom
                options={operatorsList}
                value={operator}
                set={setOperator}
                placeholder="Seleccione un Operador"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Monto</Form.Label>
              <Form.Control
                type="text"
                placeholder="100,000"
                autoFocus
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
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

export default Example;
