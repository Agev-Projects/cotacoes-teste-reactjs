import dayjs from "dayjs";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "./logo.svg";

const HeaderNav = () => {
  return (
    <Navbar sticky="top" bg="info" variant="light" expand="lg">
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
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Histórico</Nav.Link>
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
