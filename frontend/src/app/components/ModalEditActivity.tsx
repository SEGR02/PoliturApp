import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import InputCustom2 from "./InputCustom2";

function ModalEditActivity({
  isShow = false,
  activity = { ticketValue: 0, name: "", tiketsPerDay: 0, id: "" },
}) {
  const [show, setShow] = useState(isShow);
  const [newName, setNewName] = useState(activity.name);
  const [newTicketValue, setNewTicketValue] = useState(activity.ticketValue);
  const [newStock, setNewStock] = useState(activity.tiketsPerDay);
  const [schedules, setSchedules] = useState<any>([]);
  const [schedulesList, setSchedulesList] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => setShow(false);

  const submit = () => {
    const data = {
      name: newName,
      ticketValue: newTicketValue,
      tiketsPerDay: newStock,
    };

    axios
      .put(`http://localhost:8000/api/v1/activities/${activity?.id}`, data)
      .then((res) => alert("Actividad actualizada" + res.status));
    handleClose();
  };

  console.log(isChecked);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Valor del Ticket</Form.Label>
              <Form.Control
                type="text"
                value={newTicketValue}
                onChange={(e: any) => setNewTicketValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stock diario</Form.Label>
              <Form.Control
                type="text"
                value={newStock}
                onChange={(e: any) => setNewStock(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="Desea modificar horarios?"
                checked={isChecked}
                onChange={(e: any) => setIsChecked(!isChecked)}
              />
            </Form.Group>
            {isChecked && (
              <>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Agregue Horarios</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="name@example.com"
                    value={schedules}
                    onChange={(e: any) => {
                      const aux = schedules;
                      aux.push({ label: e.target.value });
                      setSchedules(aux);
                    }}
                  />
                </Form.Group>
                <Form.Label>Confirme los Horarios</Form.Label>
                <InputCustom2
                  options={schedules}
                  set={setSchedulesList}
                  value={schedulesList}
                />
              </>
            )}
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

export default ModalEditActivity;
