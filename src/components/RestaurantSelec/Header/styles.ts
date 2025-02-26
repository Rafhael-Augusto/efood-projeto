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
  position: relative;
`;

export const Container = styled.div`
  background-color: ${colors.lightWhite};
  background-image: url(${background});
  padding: 50px;
  .container {
    display: flex;
    align-items: center;

    .Image {
      margin-left: 341px;
      margin-right: 193px;
    }
  }
`;

export const ReturnHome = styled(Link)`
  ${ButtonStyle}
`;

export const OpenCart = styled.button`
  ${ButtonStyle}
  width: 256px;
  margin-left: 30px;
`;
