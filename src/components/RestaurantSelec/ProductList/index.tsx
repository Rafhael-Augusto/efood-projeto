import { useParams } from "react-router-dom";

import * as S from "./styles";
import Product from "../Product";

import carregando from "../../../assets/images/carregando.gif";
import { useGetPlatesQuery } from "../../../services/api";

const ProductList = () => {
  const { id } = useParams();

  const { data: infos } = useGetPlatesQuery(id!);

  if (!infos) {
    return (
      <h3 className="loading">
        <img src={carregando} alt="Carregando informações da página" />
      </h3>
    );
  }

  return (
    <>
      <S.Container className="container">
        {infos.cardapio.map((item) => {
          const NewItem = {
            ...item,
            newId: "",
          };
          return <Product key={NewItem.id} cardapio={NewItem} />;
        })}
      </S.Container>
    </>
  );
};

export default ProductList;
