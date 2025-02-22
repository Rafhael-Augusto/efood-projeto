import styled from "styled-components";

import { colors } from "../../../styles";
import backgroundImage from "../../../../src/assets/images/fundo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
  background-image: url("${backgroundImage}");

  padding: 40px 0;
`;

export const phrase = styled.h2`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
  color: ${colors.lightPink};
  font-family: "Roboto";
  width: 540px;
`;
