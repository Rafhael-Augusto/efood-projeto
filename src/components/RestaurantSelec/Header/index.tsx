import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../store/reducers/cart";
import * as S from "./styles";

import logo from "../../../assets/images/logo.png";
import { RootReducer } from "../../../store";

const Header = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootReducer) => state.cart);

  const OpenCart = () => {
    dispatch(open());
  };

  const getTotalItems = () => {
    return items.length;
  };

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
          <S.OpenCart onClick={OpenCart}>
            {getTotalItems()} produto(s) no carrinho
          </S.OpenCart>
        </div>
      </div>
    </S.Container>
  );
};

export default Header;
