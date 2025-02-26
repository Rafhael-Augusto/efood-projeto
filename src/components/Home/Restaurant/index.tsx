import * as S from "./styles";
import Star from "../../../assets/images/Home/estrela.png";
import { Link } from "react-router-dom";

import { Restaurant } from "../Restaurants";

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Restaurant) => {
  return (
    <>
      <S.Container className="container">
        <img src={capa} alt="Product image" />
        <S.Info>
          <S.TopRight>
            {destacado && <S.Tag>Destaque da semana</S.Tag>}
            <S.Tag>{tipo}</S.Tag>
          </S.TopRight>

          <div>
            <S.Middle>
              <S.Title>{titulo}</S.Title>
              <div>
                <h4>{avaliacao}</h4>
                <div>
                  <img src={Star} alt="Star rating" />
                </div>
              </div>
            </S.Middle>
            <S.Description>{descricao}</S.Description>
            <div>
              <Link className="tag" to={`/product/${id}`}>
                <S.Tag className="globalButton">Saiba mais</S.Tag>
              </Link>
            </div>
          </div>
        </S.Info>
      </S.Container>
    </>
  );
};

export default Product;
