import Product from "../Restaurant";
import Restaurant from "../../../models/Restaurant";

import * as S from "./styles";

export type Props = {
  Restaurants: Restaurant[];
};

const ProductList = ({ Restaurants }: Props) => {
  return (
    <S.Container className="container">
      {Restaurants.map((Restaurant) => {
        return (
          <Product
            key={Restaurant.id}
            title={Restaurant.title}
            description={Restaurant.description}
            image={Restaurant.image}
            rating={Restaurant.rating}
            infos={Restaurant.infos}
            path={Restaurant.path}
          />
        );
      })}
    </S.Container>
  );
};

export default ProductList;
