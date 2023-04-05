import { Button, Form } from "react-bootstrap";
const crearcuenta = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="Nombre" placeholder=" Ejemplo Kurt" />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="Apellido" placeholder="Ejemplo Welter" />
        </Form.Group>
      </Form>
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
          Registro
        </Button>
      </Form>
    </div>
  );
};

export default crearcuenta;
