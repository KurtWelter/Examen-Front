import { Button, Form, Container, Image, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const initialState = {
  correo: "",
  contrasena: "",
};

const IniciarSesion = () => {
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
  const handleLogin = async (event) => {
    event.preventDefault();
    const id = uuidv4();
    const data = { id: id, ...formData };
    console.log(data);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/sesiones/",
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
              Cuenta la Leyenda que Cerberus protege la integridad de las
              cuentas de nuestros Usuarios y la Reputación de PetPawnShop
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
              src="/assets/img/cerb.jpg"
              alt="Guardian de la cuenta"
              width={250}
              height={250}
            />
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
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
              <Button onClick={handleLogin} variant="secondary" type="submit">
                Iniciar Sesión
              </Button>
            </div>
          </Form>
        </Form>
      </div>
    </Container>
  );
};

export default IniciarSesion;
