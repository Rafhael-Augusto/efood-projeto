import styled from "styled-components";
import { colors } from "../styles";

export const Container = styled.div`
  position: fixed;
  display: none;
  justify-content: flex-end;
  top: 0;
  height: 100%;
  width: 100%;
  p {
    display: flex;
    gap: 214px;
    margin-bottom: 16px;
    color: ${colors.white};
    font-weight: 700;
    font-size: 14px;
  }

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.8;
  height: 100%;
  width: 100%;
`;

export const Cart = styled.aside`
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-color: ${colors.lightPink};
  width: 508px;
  height: 100%;
  padding: 32px 8px;
  color: #ffebd9;

  h3 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const CartItems = styled.div`
  display: none;

  .empty-text {
    text-align: center;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;

  padding: 8px;
  background-color: #ffebd9;
  color: ${colors.lightPink};

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    > img {
      margin: 8px;
      position: absolute;
      width: 16px;
      height: 16px;
      bottom: 0;
      right: 0;

      cursor: pointer;
    }
  }
`;

export const Payment = styled.div`
  display: none;
`;

export const ItemInfo = styled.div`
  margin-left: 8px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Adress = styled.div`
  color: ${colors.white};
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  height: 32px;
  margin-top: 8px;

  &#CEP,
  &#houseNumber {
    width: 155px;
  }

  &#cvv {
    width: 88px;
  }

  &#cardNumber {
    width: 220px;
  }

  &#expirationMonth {
    width: 155px;
  }
  &#expirationYear {
    width: 155px;
  }
`;

export const FormLabel = styled.label`
  font-weight: 700;
  font-size: 14px;
`;

export const Buttons = styled.div`
  margin-top: 24px;

  > button {
    margin-bottom: 8px;
  }
`;

export const FormItem = styled.div`
  margin-top: 8px;
`;

export const Group = styled.div`
  display: flex;
  gap: 34px;
`;

export const OrderSuccess = styled.div`
  display: none;
  p {
    font-weight: 400;
    font-size: 14px;
    color: #ffebd9;
  }
`;
