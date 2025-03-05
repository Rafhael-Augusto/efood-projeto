import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import { useFormik } from "formik";
import * as Yup from "yup";

import { RootReducer } from "../store";
import { close, remove, clear } from "../store/reducers/cart";

import lixeira from "../assets/images/lixeira.png";
import addToCartSound from "../assets/sounds/addToCart.mp3";

import * as S from "./styles";
import { useState } from "react";
import { usePurchaseMutation } from "../services/api";
import { formataPreco } from "../utils";

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

const Cart = () => {
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const [addressPage, setAddressPage] = useState(true);
  const [cardInfos, setCardInfos] = useState(false);

  const [purchase, { data, isSuccess }] = usePurchaseMutation();

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      CEP: "",
      houseNumber: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      expirationMonth: "",
      expirationYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      CEP: Yup.string().min(8, "CEP inválido").required("Campo obrigatório"),
      houseNumber: Yup.string().required("Campo obrigatório"),
      complement: Yup.string(),

      cardName: Yup.string().when((_, schema) =>
        cardInfos ? schema.required("Campo obrigatório") : schema
      ),
      cardNumber: Yup.number().when((_, schema) =>
        cardInfos ? schema.required("Campo obrigatório") : schema
      ),
      cvv: Yup.number().when((_, schema) =>
        cardInfos ? schema.required("Campo obrigatório") : schema
      ),
      expirationMonth: Yup.number().when((_, schema) =>
        cardInfos ? schema.required("Campo obrigatório") : schema
      ),
      expirationYear: Yup.number().when((_, schema) =>
        cardInfos ? schema.required("Campo obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.cardapio.id,
          price: item.cardapio.preco,
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.CEP,
            number: Number(values.houseNumber),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear),
            },
          },
        },
      });
    },
  });

  const [play] = useSound(addToCartSound, { volume: 0.3 });

  const CloseCart = () => {
    dispatch(close());
    setCardInfos(false);
    setAddressPage(true);
  };

  const RemoveItem = (cardapio: Cardapio) => {
    dispatch(remove(cardapio));
  };

  const ClearItems = () => {
    setCardInfos(false);
    dispatch(close());

    if (isSuccess) {
      dispatch(clear());
    }
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
        <S.CartItems
          style={{ display: `${addressPage && !cardInfos ? "block" : "none"}` }}
        >
          {items.length > 0 ? (
            <>
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
                          onClick={() => {
                            RemoveItem({ cardapio });
                            play();
                          }}
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
                <button
                  onClick={() => setAddressPage(false)}
                  className="globalButton"
                >
                  Continuar com a entrega
                </button>
              </div>
            </>
          ) : (
            <p className="empty-text">
              Nenhum item encontrado, adicione pelo menos um item para continuar
              com a compra.
            </p>
          )}
        </S.CartItems>

        <S.Adress
          style={{
            display: `${!addressPage && !cardInfos ? "block" : "none"}`,
          }}
        >
          <h3>Entrega</h3>

          <form>
            <S.FormItem>
              <S.FormLabel htmlFor="fullName">Quem irá receber</S.FormLabel>
              <S.FormInput
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.FormItem>
              <S.FormLabel htmlFor="address">Endereço</S.FormLabel>
              <S.FormInput
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.FormItem>
              <S.FormLabel htmlFor="city">Cidade</S.FormLabel>
              <S.FormInput
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.Group>
              <S.FormItem>
                <S.FormLabel htmlFor="CEP">CEP</S.FormLabel>
                <S.FormInput
                  id="CEP"
                  type="text"
                  name="CEP"
                  value={form.values.CEP}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
              <S.FormItem>
                <S.FormLabel htmlFor="houseNumber">Número</S.FormLabel>
                <S.FormInput
                  id="houseNumber"
                  type="text"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
            </S.Group>
            <S.FormItem>
              <S.FormLabel htmlFor="complement">
                Complemento (opcional)
              </S.FormLabel>
              <S.FormInput
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.Buttons>
              <button
                onClick={() => setCardInfos(true)}
                className="globalButton"
                type="button"
              >
                Continuar com o pagamento
              </button>
              <button
                onClick={() => setAddressPage(true)}
                className="globalButton"
                type="button"
              >
                Voltar para o carrinho
              </button>
            </S.Buttons>
          </form>
        </S.Adress>

        <S.Payment
          style={{ display: `${cardInfos && !addressPage ? "block" : "none"}` }}
        >
          <h3>Pagamento - Valor a pagar R$ 190,90</h3>

          <form onSubmit={form.handleSubmit}>
            <S.FormItem>
              <S.FormLabel htmlFor="cardName">Nome no cartão</S.FormLabel>
              <S.FormInput
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.FormItem>
            <S.Group>
              <S.FormItem>
                <S.FormLabel htmlFor="cardNumber">Número do cartão</S.FormLabel>
                <S.FormInput
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
              <S.FormItem>
                <S.FormLabel htmlFor="cvv">CVV</S.FormLabel>
                <S.FormInput
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
            </S.Group>
            <S.Group>
              <S.FormItem>
                <S.FormLabel htmlFor="expirationMonth">
                  Mês de vencimento
                </S.FormLabel>
                <S.FormInput
                  id="expirationMonth"
                  type="text"
                  name="expirationMonth"
                  value={form.values.expirationMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
              <S.FormItem>
                <S.FormLabel htmlFor="expirationYear">
                  Ano de vencimento
                </S.FormLabel>
                <S.FormInput
                  id="expirationYear"
                  type="text"
                  name="expirationYear"
                  value={form.values.expirationYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.FormItem>
            </S.Group>
            <S.Buttons>
              <button
                className="globalButton"
                type="submit"
                onClick={() => setAddressPage(true)}
              >
                Finalizar pagamento
              </button>
              <button
                onClick={() => setCardInfos(false)}
                className="globalButton"
                type="button"
              >
                Voltar para a edição de endereço
              </button>
            </S.Buttons>
          </form>
        </S.Payment>

        <S.OrderSuccess
          style={{ display: `${cardInfos && addressPage ? "block" : "none"}` }}
        >
          {isSuccess ? (
            <>
              <h3>Pedido realizado - {data.orderId}7</h3>

              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          ) : (
            <h3>Verifique as informações e tente novamente.</h3>
          )}
          <button onClick={() => ClearItems()} className="globalButton">
            Concluir
          </button>
        </S.OrderSuccess>
      </S.Cart>
    </S.Container>
  );
};

export default Cart;
