import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "../navbar/Home.css";
import { useAuth } from "../../context/authContext";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export function Home() {
  const { logout } = useAuth();
  const handleLogOut = async () => {
    await logout();
  };

  return (
    <div>
      <div className="nav-color">
        <Navbar>
          <Container>
            <div className="tamano-img">
              <Figure.Image
                width={50}
                height={50}
                alt="RPA Admin"
                src="../rpa-admin-logo.png"
              />
            </div>
            <Navbar.Brand className="text-color" href="#home">
              Bienvenido
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <div>
                <Button onClick={handleLogOut} variant="outline-light">
                  Logout
                </Button>{" "}
              </div>
              <div className="pad-2">
                <FontAwesomeIcon className="tamano-icon" icon={faGear} />
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="nav-options-color">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className="text-color" href="../navbar/home">
              Tareas
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-color" href="../pages/bots">
              Bots
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-color" href="../pages/agents">
              Agentes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-color" href="../pages/clients">
              Clientes
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>Clientes</div>
      <div>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://smartsoft.com.co/">
            SmartSoft Solutions S.A.S.
          </Link>{" "}
          2023
        </Typography>
      </div>
    </div>
  );
}

export default Home;
