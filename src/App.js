import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globalStyles.css";

import HeaderNav from "./components/HeaderNav/Nav";
import Home from "./components/Home/Home.js";
import Historico from "./components/Historico/Historico.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <div className="App-header justify-content-between">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
