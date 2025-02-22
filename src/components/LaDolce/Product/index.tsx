import * as S from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
  id: number;
};

const Product = ({ title, description, image }: Props) => {
  return (
    <S.Container>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
      <S.AddToCart>Adicionar ao carrinho</S.AddToCart>
    </S.Container>
  );
};

export default Product;
