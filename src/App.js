import { useState } from "react";
import "./App.css";
import image from "./Fondol.png";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function App() {
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);

  const handleRegClose = () => setShowReg(false);
  const handleRegShow = () => setShowReg(true);

  const handleLogClose = () => setShowLog(false);
  const handleLogShow = () => setShowLog(true);

  return (
    <>
      <div style={{ height: 700,backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
      <h1>SAQR</h1>
      <Container> 
        <Row>
          <Col sm={4}>
            <Button variant="primary" onClick={handleLogShow}>
              Ingreso
            </Button>
          </Col>
          <Col sm={4}>
            <Button variant="primary" onClick={handleRegShow}>
              Registrate
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={showLog} onHide={handleLogClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Login />
        </Modal.Body>
      </Modal>

      <Modal show={showReg} onHide={handleRegClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Register />
        </Modal.Body>
      </Modal>
      </div>

    </>
  );
}

export default App;
