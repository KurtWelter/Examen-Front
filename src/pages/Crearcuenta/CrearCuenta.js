import { Button, Form, Container, Image, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  nombre: "",
  apellido: "",
  correo: "",
  contrasena: "",
};
const CrearCuenta = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleRegistration = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const data = { id: id, ...formData };
    console.log(data);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/usuarios/",
        data
      );
      console.log(response.data);
      // Handle the response
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle the error
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <Form>
          <Modal show={showAlert} onHide={handleCloseAlert}>
            <Modal.Header closeButton>
              <Modal.Title>Información</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Si te creas una cuenta tendrás un 5% de descuento en compras
              superiores a $30.000 cpl
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAlert}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Image
              src="/assets/img/pet.PNG"
              alt="Guardian de la cuenta"
              width={250}
              height={250}
            />
          </div>

          <Form>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="nombre"
                type="text"
                placeholder="Ejemplo Kurt"
              />
            </Form.Group>

            <Form.Group controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="apellido"
                type="text"
                placeholder="Ejemplo Welter"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="correo"
                type="email"
                placeholder="Ejemplo@gmail.com"
              />
              <Form.Text className="text-muted">
                Nunca compartiremos tus datos personales, confía en nosotros.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="contrasena"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <div className="d-grid gap-2" style={{ marginTop: "5mm" }}>
              <Button
                onClick={handleRegistration}
                variant="secondary"
                type="submit"
              >
                Registro
              </Button>
            </div>
          </Form>
        </Form>
      </div>
    </Container>
  );
};

export default CrearCuenta;
