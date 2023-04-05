import { Button, Form } from "react-bootstrap";
const iniciarsecion = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Ejemplo@gmail.com" />
          <Form.Text className="text-muted">
            Nunca compartiremos tus datos personales, confia en nosotros
          </Form.Text>
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Password" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default iniciarsecion;
