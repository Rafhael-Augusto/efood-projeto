import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./styles";

import { Restaurant } from "../../Home/Restaurants";

const Banner = () => {
  const { id } = useParams();

  const [restInfo, setRestInfo] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestInfo([res]));
  }, [id]);

  return (
    <>
      {restInfo.map((item, index) => {
        return (
          <S.Background background={item.capa} key={index}>
            <div className="container">
              <S.RestaurantType>{item.tipo}</S.RestaurantType>
              <S.RestaurantName>{item.titulo}</S.RestaurantName>
            </div>
          </S.Background>
        );
      })}
    </>
  );
};

export default Banner;
