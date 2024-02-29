import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function fetchExample() {
    if (email.length > 0 && password.length > 0) {
      const response = await fetch(
        `http://localhost:8888/apisaqr/?correo=${email}&contrasena=${password}`
      );
      const data = await response.json();
      const user = data.data;
      if (user == null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.mensaje,
        });
      } else {
        navigate.replace("/dashboard", user);
      }
    } else {
      Swal.fire({
        title: "????",
        text: "Faltan datos",
        icon: "question",
      });
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3 form-group" controlId="formBasicName">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Escribe tu correo"
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            className="form-input"
            type="password"
            placeholder="Escribe contraseña"
            onChange={handleChangePassword}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={fetchExample}>
          Ingresar
        </Button>
      </Form>
    </>
  );
}

export default Login;
