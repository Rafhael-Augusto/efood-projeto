import * as S from "./styles";

import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <S.Container>
      <div className="container">
        <div>
          <S.ReturnHome to={"/"}>Restaurantes</S.ReturnHome>
        </div>
        <div className="Image">
          <img src={logo} alt="efood logo" />
        </div>
        <div>
          <S.OpenCart>0 produto(s) no carrinho</S.OpenCart>
        </div>
      </div>
    </S.Container>
  );
};

export default Header;
