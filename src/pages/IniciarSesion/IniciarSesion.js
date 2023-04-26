import { Button, Form } from "react-bootstrap";

const IniciarSesion = () => {
  return (
    <div>
      <Form>
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
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
};

export default IniciarSesion;
