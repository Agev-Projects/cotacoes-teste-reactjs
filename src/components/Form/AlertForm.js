import Alert from "react-bootstrap/Alert";

const AlertForm = ({ setAlert, valorOrigem, moedaOrigem, moedaDestino }) => {
  let alerts = [];

  if (!valorOrigem) {
    alerts.push("inserir um valor inicial");
  }

  if (moedaOrigem === "Moeda") {
    alerts.push("selecionar uma moeda de Origem");
  }

  if (moedaDestino.length === 0) {
    alerts.push("selecionar as moedas de Destino");
  }

  if (alerts.length === 0) {
    setAlert(false);
  }

  return (
    <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
      Você tem que: {alerts.join(", ")}
    </Alert>
  );
};

export default AlertForm;
