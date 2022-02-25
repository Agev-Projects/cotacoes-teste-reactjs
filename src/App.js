import { useState, useEffect } from "react";
import "./styles/globalStyles.css";
import Container from "react-bootstrap/Container";

import Resultado from "./components/Form/Resultado.js";
import FormMoedas from "./components/Form/FormMoedas.js";
import HeaderNav from "./components/HeaderNav/Nav";
import Footer from "./components/Footer/Footer.js";

const App = () => {
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
    <div className="App-header">
      <HeaderNav />
      <Container>
        <div className="App mb-10">
          {showResultado ? (
            <Resultado
              readData={readData}
              moedaDestino={moedaDestino}
              valorOrigem={valorOrigem}
              setShowResultado={setShowResultado}
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

      <Footer />
    </div>
  );
};

export default App;
