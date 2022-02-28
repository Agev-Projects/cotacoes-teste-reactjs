import { useState } from "react";
import NumberFormat from "react-number-format";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

import AlertForm from "./AlertForm.js";

const FormMoedas = ({
  moedaOrigem,
  valorOrigem,
  moedaDestino,
  setMoedaDestino,
  setMoedaOrigem,
  setValorOrigem,
  setReadData,
  setShowResultado,
}) => {
  const [alert, setAlert] = useState(false);

  const handleButtonClick = () => {
    if (valorOrigem && moedaOrigem !== "Moeda" && moedaDestino.length !== 0) {
      setShowResultado(true);
    } else {
      return setAlert(true);
    }
  };

  const handleInputChange = (value) => {
    setValorOrigem(value.floatValue);
  };

  const handleCheckBoxChange = (e) => {
    let checked = e.target.checked;
    if (checked) {
      setReadData((previous) => [
        ...previous,
        `${moedaOrigem}${e.target.value}`,
      ]);

      setMoedaDestino((previous) => [
        ...previous,
        `${moedaOrigem}-${e.target.value}`,
      ]);
    } else {
      setMoedaDestino((previous) =>
        previous.filter((item) => item !== `${moedaOrigem}-${e.target.value}`)
      );
      setReadData((previous) =>
        previous.filter((item) => item !== `${moedaOrigem}${e.target.value}`)
      );
    }
  };

  const handleClick = (value) => {
    setMoedaOrigem(value);
  };

  const handleDisabled = (code) => {
    if (moedaOrigem !== "Moeda" && valorOrigem) {
      if (moedaOrigem === code) {
        return true;
      }
      return false;
    } else return true;
  };

  return (
    <main>
      <Container fluid>
        <h1 className="h1 mb-4 text-secondary">Cotação de Moedas</h1>
        <Form.Group>
          <Row className="justify-content-center gy-3 gx-4 mb-5">
            <Form.Label className="text-secondary">
              Selecione a moeda e o valor de origem:
            </Form.Label>
            <Col md="auto">
              <Dropdown onSelect={(eventKey) => handleClick(eventKey)}>
                <Dropdown.Toggle variant="info">{moedaOrigem}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="BRL">BRL</Dropdown.Item>
                  <Dropdown.Item eventKey="USD">USD</Dropdown.Item>
                  <Dropdown.Item eventKey="EUR">EURO</Dropdown.Item>
                  <Dropdown.Item eventKey="CAD">CAD</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg={2}>
              <NumberFormat
                className="form-control"
                onValueChange={(value) => handleInputChange(value)}
                thousandSeparator={true}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-4">
            <Form.Label className="text-secondary">
              Selecione as moedas de destino:
            </Form.Label>
            <Col lg={4}>
              <Form.Check
                inline
                type="checkbox"
                value="USD"
                label="USD"
                onChange={(e) => handleCheckBoxChange(e)}
                disabled={handleDisabled("USD") ? true : false}
              />

              <Form.Check
                inline
                type="checkbox"
                value="EUR"
                label="EUR"
                onChange={(e) => handleCheckBoxChange(e)}
                disabled={handleDisabled("EUR") ? true : false}
              />

              <Form.Check
                inline
                type="checkbox"
                value="BRL"
                label="BRL"
                onChange={(e) => handleCheckBoxChange(e)}
                disabled={handleDisabled("BRL") ? true : false}
              />

              <Form.Check
                inline
                type="checkbox"
                value="CAD"
                label="CAD"
                onChange={(e) => handleCheckBoxChange(e)}
                disabled={handleDisabled("CAD") ? true : false}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            {alert ? (
              <Col>
                <AlertForm
                  setAlert={setAlert}
                  valorOrigem={valorOrigem}
                  moedaOrigem={moedaOrigem}
                  moedaDestino={moedaDestino}
                />
              </Col>
            ) : (
              <></>
            )}
          </Row>
          <Row className="justify-content-md-center mb-4">
            <Col lg={3}>
              <Button
                variant="info"
                className="mt-2"
                onClick={handleButtonClick}
              >
                Obter Cotação
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Container>
    </main>
  );
};

export default FormMoedas;
