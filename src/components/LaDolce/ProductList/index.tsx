import Product from "../Product";
import PizzaModel from "../../../models/Pizzas";

import * as S from "./styles";

export type Props = {
  Pizzas: PizzaModel[];
};

const ProductList = ({ Pizzas }: Props) => {
  return (
    <S.Container className="container">
      {Pizzas.map((pizza, index) => {
        return (
          <Product
            title={pizza.title}
            description={pizza.description}
            image={pizza.image}
            key={index}
            id={index}
          />
        );
      })}
    </S.Container>
  );
};

export default ProductList;
