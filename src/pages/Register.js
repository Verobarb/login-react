import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Register() {
  

  return (

  <Form>
     <Form.Group className="mb-3 form-group" controlId="formBasicName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Escribe Nombres"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicLastname"
            >
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Escribe Apellidos"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                className="form-input"
                type="email"
                placeholder="Escribe tu correo"
              />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
              <Form.Label>Tipo de usuario</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleccione una opción</option>
                <option value="1">Administrador</option>
                <option value="2">Logístico</option>
                <option value="3">Despachos</option>
                <option value="4">Pedidos</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicPassword"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                className="form-input"
                type="password"
                placeholder="Escribe contraseña"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicPassword"
            >
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control
                className="form-input"
                type="password"
                placeholder="Confirmar contraseña"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-group"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>

  );
}

export default Register;
