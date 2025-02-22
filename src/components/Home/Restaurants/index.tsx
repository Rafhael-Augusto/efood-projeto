import RestaurantModel from "../../../models/Restaurant";
import ProductList from "../RestaurantList";

import Sushi from "../../../assets/images/Home/Sushi.png";
import Massa from "../../../assets/images/Home/Massa.png";

const RestaurantList: RestaurantModel[] = [
  {
    title: "Hioki Sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
    image: `${Sushi}`,
    rating: 4.9,
    infos: ["Destaque da semana", "Japonesa"],
    id: 1,
    path: `/HiokiSushi`,
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: `${Massa}`,
    rating: 4.6,
    infos: ["italiana"],
    id: 2,
    path: `/LaDolceVitaTrattoria`,
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: `${Massa}`,
    rating: 4.6,
    infos: ["italiana"],
    id: 3,
    path: `/LaDolceVitaTrattoria`,
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: `${Massa}`,
    rating: 4.6,
    infos: ["italiana"],
    id: 4,
    path: `/LaDolceVitaTrattoria`,
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: `${Massa}`,
    rating: 4.6,
    infos: ["italiana"],
    id: 5,
    path: `/LaDolceVitaTrattoria`,
  },
  {
    title: "La Dolce Vita Trattoria",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    image: `${Massa}`,
    rating: 4.6,
    infos: ["italiana"],
    id: 6,
    path: `/LaDolceVitaTrattoria`,
  },
];

const Category = () => {
  return <ProductList Restaurants={RestaurantList} />;
};

export default Category;
