import { Button, Form, Container, Image, Modal } from "react-bootstrap";
import { useState } from "react";

const CrearCuenta = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
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

          <Form action="http://localhost:3000/api/registro" method="POST">
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo Kurt" />
            </Form.Group>

            <Form.Group controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Ejemplo Welter" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ejemplo@gmail.com" />
              <Form.Text className="text-muted">
                Nunca compartiremos tus datos personales, confía en nosotros.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="d-grid gap-2" style={{ marginTop: "5mm" }}>
              <Button variant="secondary" type="submit">
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
