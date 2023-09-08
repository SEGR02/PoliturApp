import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function ModalEditScheduleActivity({
  isShow = false,
  seller = { stock: "", date: "", hour: "", id: "" },
}) {
  const [show, setShow] = useState(isShow);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [newStock, setNewStock] = useState(seller.stock);
  const [newDate, setNewDate] = useState();
  const [newHour, setNewHour] = useState();

  const handleClose = () => setShow(false);

  const submit = (
    stock = seller.stock,
    date = seller.date,
    hour = seller.hour
  ) => {
    const data = {
      stock,
      date,
      hour,
    };

    axios
      .put(
        `https://politurapp-production.up.railway.app/api/v1/stock/${seller?.id}`,
        data
      )
      .then((res) => alert("Actividad Agendada Actualizada " + res.status));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Actividad Agendada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                value={newStock}
                onChange={(e) => setNewStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Desea modificar la fecha?"
                checked={isChecked}
                onChange={(e: any) => setIsChecked(!isChecked)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Desea modificar la hora?"
                checked={isChecked2}
                onChange={(e: any) => setIsChecked2(!isChecked2)}
              />
            </Form.Group>
            {isChecked && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Indique la nueva Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={newDate}
                  onChange={(e: any) => setNewDate(e.target.value)}
                />
              </Form.Group>
            )}
            {isChecked2 && (
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Indique la nueva Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={newHour}
                  onChange={(e: any) => setNewHour(e.target.value)}
                />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              submit(
                newStock != seller.stock ? newStock : seller.stock,
                isChecked ? newDate : seller.date,
                isChecked2 ? newHour : seller.hour
              )
            }
          >
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditScheduleActivity;
