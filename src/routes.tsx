import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LaDolce from "./pages/LaDolce";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LaDolceVitaTrattoria" element={<LaDolce />} />
    </Routes>
  );
};

export default Rotas;
