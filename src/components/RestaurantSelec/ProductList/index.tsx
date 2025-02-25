import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Restaurant } from "../../Home/Restaurants";

import * as S from "./styles";
import Product from "../Product";

import carregando from "../../../assets/images/carregando.gif";

const ProductList = () => {
  const { id } = useParams();

  const [infos, setInfos] = useState<Restaurant>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setInfos(res));
  }, [id]);

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
          return (
            <Product
              key={item.id}
              foto={item.foto}
              preco={item.preco}
              id={item.id}
              nome={item.nome}
              descricao={item.descricao}
              porcao={item.porcao}
            />
          );
        })}
      </S.Container>
    </>
  );
};

export default ProductList;
