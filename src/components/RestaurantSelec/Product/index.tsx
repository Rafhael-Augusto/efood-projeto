import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";

import closeImage from "../../../assets/images/fechar.png";
import { useDispatch } from "react-redux";
import { add } from "../../../store/reducers/cart";
import { formataPreco } from "../../../services/brl";

export interface Cardapio {
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

  const AddItem = (SelectedItem: Cardapio) => {
    dispatch(add(SelectedItem));
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
        <button className="globalButton" onClick={() => setVisible(true)}>
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
                  <button
                    className="globalButton"
                    onClick={() => {
                      const newId = uuidv4();
                      const NewItem = {
                        ...cardapio,
                        newId: newId,
                      };

                      AddItem({ cardapio: NewItem });
                    }}
                  >
                    Adicionar ao carrinho - {formataPreco(cardapio.preco)}
                  </button>
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
