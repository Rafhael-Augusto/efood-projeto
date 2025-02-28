import ProductList from "../RestaurantList";

import carregando from "../../../assets/images/carregando.gif";
import { useGetRestaurantQuery } from "../../../services/api";

type Cardapio = {
  idStore: string;
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
  const { data: restaurantes } = useGetRestaurantQuery();

  if (!restaurantes) {
    return (
      <h3 className="loading">
        <img src={carregando} alt="Carregando informações da página" />
      </h3>
    );
  }
  return <ProductList Restaurants={restaurantes} />;
};

export default Category;
