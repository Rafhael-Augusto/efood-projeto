import logo from "../../../assets/images/logo.png";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <h1>
        <img src={logo} alt="efood logo" />
      </h1>

      <S.phrase>
        Viva experiências gastronômicas no conforto da sua casa
      </S.phrase>
    </S.Container>
  );
};

export default Header;
