import ProductList from "../RestaurantList";

import carregando from "../../../assets/images/carregando.gif";
import { useGetRestaurantQuery } from "../../../services/api";

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
