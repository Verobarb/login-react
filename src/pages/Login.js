import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



function Login() {
  async function fetchExample() {
    console.log("compli")
    try {
      const response = await fetch(`http://localhost/apisaqr?correo=nicole_veronica@hotmail.com&contrasena=1234`, {
        'mode': 'cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    });
      console.log(response)
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    }
  }
  

  return ( 
    <>
    <Form>
     <Form.Group className="mb-3 form-group" controlId="formBasicName">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                placeholder="Escribe tu correo"
              />
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
            <Button variant="primary" type="button" onClick={fetchExample}>
              Ingresar
            </Button>
          </Form>
          </>      

   

  );
}

export default Login;