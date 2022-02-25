import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../../api/api.js";

import "../../styles/globalStyles.css";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import { motion } from "framer-motion";

const Resultado = ({
  readData,
  moedaDestino,
  valorOrigem,
  setShowResultado,
}) => {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const getMoney = async () => {
    try {
      let money = await api.get(`/${moedaDestino.join()}`).then((response) => {
        setData(response.data);
        saveHistorico(response.data);
      });

      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const conversaoMoeda = (value) => {
    let moeda = parseFloat(value);
    return (moeda * valorOrigem).toFixed(2);
  };

  const saveHistorico = (data) => {
    let array = readData.map((item) => {
      return {
        moeda: data[item].code,
        valor: valorOrigem,
        date: data[item].create_date,
        moedasDestino: data[item].codein,
        resultado: conversaoMoeda(data[item].ask),
      };
    });
    localStorage.setItem(uuidv4(), JSON.stringify(array));
  };

  useEffect(() => {
    getMoney();
  }, []);

  return (
    <Container>
      {loaded ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="h1 mb-4 mt-5 text-secondary">Cotação de Moedas</h1>
          {readData.map((item, index) => {
            return (
              <motion.p
                key={index}
                className="h3"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <span
                  className={`${data[item].codein}`}
                >{`${data[item].codein}`}</span>{" "}
                {`${conversaoMoeda(data[item].ask)}`}
              </motion.p>
            );
          })}

          <Button
            variant="info"
            className="mt-4"
            onClick={() => setShowResultado(false)}
          >
            Nova Cotação
          </Button>
        </motion.div>
      ) : (
        <Spinner animation="border" role="status" />
      )}
    </Container>
  );
};

export default Resultado;
