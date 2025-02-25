import styled from "styled-components";
import { colors } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 320px;
  width: 100%;
  padding: 8px;
  background-color: ${colors.lightPink};

  div {
    img {
      display: block;
      max-width: 304px;
      max-height: 167px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;

export const Title = styled.h3`
  color: ${colors.white};
  font-weight: 900;
  font-size: 16px;
  margin-top: 8px;
`;

export const Description = styled.p`
  color: ${colors.white};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Container_2 = styled.div`
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    background-color: ${colors.lightPink};
    padding: 32px;
    color: ${colors.white};

    p,
    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      margin: 16px 0;
    }

    .globalButton {
      max-width: 218px;
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button {
        margin-bottom: 27px;
      }
    }
  }
`;

export const Title_2 = styled.h3`
  font-weight: 900;
  font-size: 18px;
`;

export const CloseModal = styled.div`
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;
