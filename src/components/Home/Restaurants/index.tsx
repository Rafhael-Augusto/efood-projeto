import ProductList from "../RestaurantList";
import { useEffect, useState } from "react";

import carregando from "../../../assets/images/carregando.gif";

type Cardapio = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Cardapio[];
};

const Category = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  if (!restaurantes) {
    return (
      <h3 className="loading">
        <img src={carregando} alt="Carregando informações da página" />
      </h3>
    );
  }

  console.log(restaurantes);
  return <ProductList Restaurants={restaurantes} />;
};

export default Category;
