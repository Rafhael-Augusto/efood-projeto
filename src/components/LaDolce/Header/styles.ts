import styled, { css } from "styled-components";
import { colors } from "../../../styles";
import { Link } from "react-router-dom";

import background from "../../../assets/images/fundo.png";

const ButtonStyle = css`
  color: ${colors.lightPink};
  font-weight: 900;
  font-size: 18px;
  border: none;
  background-color: transparent;
`;

export const Container = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: ${colors.lightWhite};
  background-image: url(${background});
  padding: 40px;
`;

export const ReturnHome = styled(Link)`
  ${ButtonStyle}
`;

export const OpenCart = styled.button`
  ${ButtonStyle}
`;
