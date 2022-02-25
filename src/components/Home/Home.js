import { useState, useEffect } from "react";

import "../../styles/globalStyles.css";
import Container from "react-bootstrap/Container";

import Resultado from "../Form/Resultado.js";
import FormMoedas from "../Form/FormMoedas.js";

const Home = ({ setSendHistorico }) => {
  const [moedaOrigem, setMoedaOrigem] = useState("Moeda");
  const [valorOrigem, setValorOrigem] = useState(null);
  const [moedaDestino, setMoedaDestino] = useState([]);
  const [readData, setReadData] = useState([]);
  const [showResultado, setShowResultado] = useState(false);

  useEffect(() => {
    if (!showResultado) {
      setMoedaOrigem("Moeda");
      setValorOrigem(null);
      setMoedaDestino([]);
      setReadData([]);
    }
  }, [showResultado]);

  return (
    <div>
      <Container>
        <div className="App">
          {showResultado ? (
            <Resultado
              readData={readData}
              moedaDestino={moedaDestino}
              valorOrigem={valorOrigem}
              setShowResultado={setShowResultado}
              setSendHistorico={setSendHistorico}
            />
          ) : (
            <FormMoedas
              moedaOrigem={moedaOrigem}
              valorOrigem={valorOrigem}
              moedaDestino={moedaDestino}
              setMoedaDestino={setMoedaDestino}
              setMoedaOrigem={setMoedaOrigem}
              setValorOrigem={setValorOrigem}
              setReadData={setReadData}
              setShowResultado={setShowResultado}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
