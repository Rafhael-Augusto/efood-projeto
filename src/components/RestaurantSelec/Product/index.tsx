import { useState } from "react";
import * as S from "./styles";

import closeImage from "../../../assets/images/fechar.png";

type Items = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

const Product = ({ foto, preco, nome, descricao, porcao }: Items) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <S.Container>
        <div>
          <div>
            <img src={foto} alt="" />
          </div>
          <div>
            <S.Title>{nome}</S.Title>
            <S.Description>{descricao}</S.Description>
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
                <img src={foto} alt={nome} />

                <div>
                  <div>
                    <S.Title_2>{nome}</S.Title_2>
                    <h4>{descricao}</h4>
                    <p>Serve: {porcao}</p>
                  </div>
                  <button className="globalButton">
                    Adicionar ao carrinho - {preco}
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
