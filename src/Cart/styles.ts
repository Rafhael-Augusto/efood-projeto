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
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: ${colors.lightPink};
  width: 480px;
  height: 100%;
  padding: 32px 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
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

export const ItemInfo = styled.div`
  margin-left: 8px;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;
