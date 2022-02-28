import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "./logo.svg";

const HeaderNav = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="info" variant="light" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand>
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top mr-5"
            alt="Cotação Express logo"
          />{" "}
          Cotação Express
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse>
          <Nav className="me-auto font-weight-bold">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/historico"
              onClick={() => setExpanded(false)}
            >
              Histórico
            </Nav.Link>
            <Nav.Link href="https://docs.awesomeapi.com.br/api-de-moedas">
              Documentação
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Text>{dayjs().format("DD/MM/YYYY hh:mm:ss a")}</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
