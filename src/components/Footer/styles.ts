import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.lightPink};
  background-color: ${colors.lightWhite};
  padding: 40px;

  p {
    text-align: center;
    font-weight: 400;
    font-size: 10px;
    line-height: 8px;
    margin-bottom: 40px;
    max-width: 480px;
    width: 100%;
  }
`;

export const Logos = styled.div`
  margin: 32px 0 80px 0;
  display: flex;
  gap: 8px;
`;
