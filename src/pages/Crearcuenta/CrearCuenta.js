import { Button, Form } from "react-bootstrap";

const CrearCuenta = () => {
  return (
    <div>
      <Form>
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

        <Button variant="secondary" type="submit">
          Registro
        </Button>
      </Form>
    </div>
  );
};

export default CrearCuenta;
