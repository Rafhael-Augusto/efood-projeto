import * as S from "./styles";
import Star from "../../../assets/images/Home/estrela.png";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  image: string;
  rating: number;
  infos: string[];
  path: string;
};

const Product = ({ title, description, image, rating, infos, path }: Props) => {
  return (
    <>
      <S.Container className="container">
        <img src={image} alt="Product image" />
        <S.Info>
          <S.TopRight>
            {infos.map((info, index) => {
              return <S.Tag key={index}>{info}</S.Tag>;
            })}
          </S.TopRight>

          <div>
            <S.Middle>
              <S.Title>{title}</S.Title>
              <div>
                <h4>{rating}</h4>
                <div>
                  <img src={Star} alt="Star rating" />
                </div>
              </div>
            </S.Middle>
            <S.Description>{description}</S.Description>
            <S.Tag>
              <Link className="tag" to={path}>
                Saiba mais
              </Link>
            </S.Tag>
          </div>
        </S.Info>
      </S.Container>
    </>
  );
};

export default Product;
