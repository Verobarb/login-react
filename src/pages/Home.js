import React from "react";
import { useState } from "react";

import Register from "./Register";
import Login from "./Login";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Home() {
  const [showLog, setShowLog] = useState(false);
  const [showReg, setShowReg] = useState(false);

  const handleRegClose = () => setShowReg(false);
  const handleRegShow = () => setShowReg(true);

  const handleLogClose = () => setShowLog(false);
  const handleLogShow = () => setShowLog(true);

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%)",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "150px" }}>SAQR</h1>
        <h2 style={{ fontSize: "80px" }}>Software master</h2>
        <hr />
        <Container>
          <Row>
            <Col className="col-center">
              <Button
                variant="primary"
                style={{ fontSize: "35px" }}
                onClick={handleLogShow}
              >
                Ingreso
              </Button>
            </Col>
            <Col className="col-center">
              <Button
                variant="primary"
                style={{ fontSize: "35px" }}
                onClick={handleRegShow}
              >
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

export default Home;
