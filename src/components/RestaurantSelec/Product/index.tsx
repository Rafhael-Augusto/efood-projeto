import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useSound from "use-sound";
import clsx from "clsx";

import { useDispatch } from "react-redux";
import { add } from "../../../store/reducers/cart";

import closeImage from "../../../assets/images/fechar.png";
import addToCartSound from "../../../assets/sounds/addToCart.mp3";

import * as S from "./styles";
import { formataPreco } from "../../../utils";

interface Cardapio {
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    newId: string;
    nome: string;
    descricao: string;
    porcao: string;
  };
}

const Product = ({ cardapio }: Cardapio) => {
  const dispatch = useDispatch();

  const [itemAdded, setItemAdded] = useState(false);
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const [play] = useSound(addToCartSound, { volume: 0.3 });

  const itemAddedFunc = async () => {
    setItemAdded(true);
    play();
    await delay(100);
    setItemAdded(false);
  };

  const AddItem = (SelectedItem: Cardapio) => {
    if (!itemAdded) {
      dispatch(add(SelectedItem));
      itemAddedFunc();
    }
  };

  const [visible, setVisible] = useState(false);
  return (
    <>
      <S.Container>
        <div>
          <div>
            <img src={cardapio.foto} alt="" />
          </div>
          <div>
            <S.Title>{cardapio.nome}</S.Title>
            <S.Description>{cardapio.descricao}</S.Description>
          </div>
        </div>
        <button
          title="Ver mais detalhes"
          className="globalButton"
          onClick={() => setVisible(true)}
        >
          Mais detalhes
        </button>
      </S.Container>

      {visible && (
        <>
          <S.Modal>
            <S.Container_2 className="container">
              <button onClick={() => setVisible(false)}>
                <img src={closeImage} alt="Fechar modal" />
              </button>
              <div>
                <img src={cardapio.foto} alt={cardapio.nome} />

                <div>
                  <div>
                    <S.Title_2>{cardapio.nome}</S.Title_2>
                    <h4>{cardapio.descricao}</h4>
                    <p>Serve: {cardapio.porcao}</p>
                  </div>
                  <S.addToCart>
                    <button
                      title="Adicionar ao carrinho"
                      className={clsx("globalButton", {
                        focus: itemAdded,
                        unfocus: !itemAdded,
                      })}
                      onClick={() => {
                        const newId = uuidv4();
                        const NewItem = {
                          ...cardapio,
                          newId: newId,
                        };

                        {
                          AddItem({ cardapio: NewItem });
                        }
                      }}
                    >
                      Adicionar ao carrinho - {formataPreco(cardapio.preco)}
                    </button>
                  </S.addToCart>
                </div>
              </div>
            </S.Container_2>
            <S.CloseModal onClick={() => setVisible(false)}></S.CloseModal>
          </S.Modal>
        </>
      )}
    </>
  );
};

export default Product;
