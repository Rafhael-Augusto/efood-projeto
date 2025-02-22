import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LaDolce from "./pages/LaDolce";
import HiokiSushi from "./pages/HiokiSushi";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LaDolceVitaTrattoria" element={<LaDolce />} />
      <Route path="/HiokiSushi" element={<HiokiSushi />} />
    </Routes>
  );
};

export default Rotas;
