import PizzaModel from "../../../models/Pizzas";
import ProductList from "../ProductList";

import MargheritaPizza from "../../../assets/images/LaDolce/MargheritaPizza.png";

const PizzaList: PizzaModel[] = [
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 1,
  },
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 2,
  },
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 3,
  },
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 4,
  },
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 5,
  },
  {
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: `${MargheritaPizza}`,
    id: 6,
  },
];

const Category = () => {
  return <ProductList Pizzas={PizzaList} />;
};

export default Category;
