import Product, { Restaurant } from "../Restaurant";

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
            id={Restaurant.id}
            titulo={Restaurant.titulo}
            destacado={Restaurant.destacado}
            descricao={Restaurant.descricao}
            tipo={Restaurant.tipo}
            avaliacao={Restaurant.avaliacao}
            capa={Restaurant.capa}
            cardapio={Restaurant.cardapio}
          />
        );
      })}
    </S.Container>
  );
};

export default ProductList;
