import * as S from "./styles";

import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <S.Container>
      <div>
        <S.ReturnHome to={"/"}>Restaurantes</S.ReturnHome>
      </div>
      <div>
        <img src={logo} alt="efood logo" />
      </div>
      <div>
        <S.OpenCart>0 produto(s) no carrinho</S.OpenCart>
      </div>
    </S.Container>
  );
};

export default Header;
