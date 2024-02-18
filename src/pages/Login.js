import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Login() {
  

  return ( 
    <Form>
     <Form.Group className="mb-3 form-group" controlId="formBasicName">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
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

export default Login;