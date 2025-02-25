import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restaurant from "./pages/RestaurantItems";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Restaurant />} />
    </Routes>
  );
};

export default Rotas;
