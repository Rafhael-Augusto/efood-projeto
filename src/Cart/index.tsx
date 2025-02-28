import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import { close, remove } from "../store/reducers/cart";

import * as S from "./styles";

import lixeira from "../assets/images/lixeira.png";
import { formataPreco } from "../services/brl";
import { Cardapio } from "../components/RestaurantSelec/Product";

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const CloseCart = () => {
    dispatch(close());
  };

  const RemoveItem = (cardapio: Cardapio) => {
    dispatch(remove(cardapio));
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.cardapio.preco);
    }, 0);
  };

  return (
    <S.Container className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={CloseCart}></S.Overlay>

      <S.Cart>
        <ul>
          {items.map((item) => {
            const cardapio = item.cardapio;
            return (
              <S.Item key={cardapio.newId}>
                <img src={item.cardapio.foto} alt={item.cardapio.nome} />

                <S.ItemInfo>
                  <h3>{item.cardapio.nome}</h3>
                  <span>{formataPreco(item.cardapio.preco)}</span>
                </S.ItemInfo>
                <div>
                  <img
                    onClick={() => RemoveItem({ cardapio })}
                    src={lixeira}
                    alt={`Remover o item ${item.cardapio.nome} da lista`}
                  />
                </div>
              </S.Item>
            );
          })}
        </ul>

        <div>
          <p>
            Valor total <span>{formataPreco(getTotalPrice())}</span>
          </p>
          <button className="globalButton">Continuar com a entrega</button>
        </div>
      </S.Cart>
    </S.Container>
  );
};

export default Cart;
