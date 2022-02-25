import "../../styles/globalStyles.css";

const Footer = () => {
  return (
    <footer className="App mb-2">
      <p className="h6">
        Este projeto utiliza as APIs públicas "Awesome" para realizar as
        cotações:
      </p>
      <p className="h6">
        Acesse:{" "}
        <a href="https://docs.awesomeapi.com.br/api-de-moedas">
          https://docs.awesomeapi.com.br/api-de-moedas
        </a>
      </p>
    </footer>
  );
};

export default Footer;
