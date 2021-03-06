import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/globalStyles.css";

const Historico = () => {
  const [values, setValues] = useState([]);

  //Lê dados do LocalStorage
  const getKeys = () => {
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.getItem(localStorage.key(i)));
      setValues((previous) => [
        JSON.parse(localStorage.getItem(localStorage.key(i))),
        ...previous,
      ]);
    }
  };

  useEffect(() => {
    getKeys();
  }, []);

  return (
    <Container>
      <Row className="gy-4 justify-content-center">
        <h2 style={{ textAlign: "center" }}>Histórico de Cotações</h2>
        {values.length !== 0 ? (
          values.map((items, index) => {
            return (
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} key={index}>
                  {items.map((item, index) => {
                    return (
                      <Card.Body key={index}>
                        <Card.Title>{`Cotação de ${item.valor}${item.moeda} -> ${item.moedasDestino}`}</Card.Title>
                        <Card.Subtitle>{`Data: ${item.date}`}</Card.Subtitle>
                        <Card.Text>
                          <span
                            className={`${item.moedasDestino}`}
                          >{`${item.moedasDestino}`}</span>{" "}
                          {`${item.resultado}`}
                        </Card.Text>
                      </Card.Body>
                    );
                  })}
                </Card>
              </Col>
            );
          })
        ) : (
          <h6 style={{ textAlign: "center" }}>Nenhuma cotação feita</h6>
        )}
      </Row>
    </Container>
  );
};

export default Historico;
