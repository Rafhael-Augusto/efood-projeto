import { useParams } from "react-router-dom";

import * as S from "./styles";

import { useGetPlatesQuery } from "../../../services/api";

import loading from "../../../assets/images/carregando.gif";

const Banner = () => {
  const { id } = useParams();

  const { data: restInfo } = useGetPlatesQuery(id!);

  if (!restInfo) {
    return (
      <h3 className="loading">
        <img src={loading} alt="Carregando" />
      </h3>
    );
  }

  return (
    <>
      <S.Background background={restInfo.capa}>
        <div className="container">
          <S.RestaurantType>{restInfo.tipo}</S.RestaurantType>
          <S.RestaurantName>{restInfo.titulo}</S.RestaurantName>
        </div>
      </S.Background>
    </>
  );
};

export default Banner;
